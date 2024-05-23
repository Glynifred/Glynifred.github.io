from datetime import datetime, timedelta,UTC
from flask import Flask,request
from flask_cors import CORS
import requests

cors = CORS()
app = Flask(__name__)

cors.init_app(app)
# Function to calculate the average of a list
def calculate_average(data_list):
    if not data_list:
        return None
    return sum(data_list) / len(data_list)

def get_averages(postcode):
    # Calculate the start date 7 days before the current date
    current_date = datetime.now(UTC)- timedelta(seconds=10)
    print(current_date)
    start_date = current_date - timedelta(days=7)
    # Format the start date as ISO 8601 format
    start_date_iso = start_date.strftime("%Y-%m-%dT%H:%M:%S.000Z")
    print(start_date_iso)

    # Calculate the end date (current date)
    end_date_iso = current_date.strftime("%Y-%m-%dT%H:%M:%S.000Z")
    print(end_date_iso)

    api_key = 'Zns6AU15HCRKpokuRIjl-RparEhw0b8S'

    #postcode = "ba29bn"
    postcode = str.lower(postcode).replace(" ","")
        
    # Fetch latitude and longitude from postcodes.io
    postcodes_response = requests.get(f'https://api.postcodes.io/postcodes/{postcode}')
    postcodes_data = postcodes_response.json()
    #print(postcodes_data)
    latitude = postcodes_data['result']['latitude']
    print(latitude)
    longitude = postcodes_data['result']['longitude']
    print(longitude)

    url = f"https://api.solcast.com.au/data/historic/radiation_and_weather?latitude={-33.856784}&longitude={151.215297}&azimuth=44&tilt=90&start={start_date_iso}&end={end_date_iso}&format=json&time_zone=utc&api_key={api_key}"

    # Fetch data from Solcast API
    #solcast_response = requests.get(f'https://api.solcast.com.au/world_radiation/estimated_actuals?latitude=-33.86882&longitude=151.209295&hours=168&format=json&api_key={api_key}')
    solcast_response = requests.get(url)
    solcast_data = solcast_response.json()

    #print(solcast_data)

    ## Extract dni data into lists
    dni_data = [entry['dni'] for entry in solcast_data['estimated_actuals']]

    # Calculate averages
    dni_average = calculate_average(dni_data)
    dni_average = str(dni_average)

    print("Average DNI:", dni_average)
        # print("Average GHI:", ghi_average)

    return dni_average


@app.route('/GetDNI')
def get_DNI():
    postcode = request.args.get('postcode')
    dni_average = get_averages(postcode)
    return {'DNI' : dni_average}

app.run()