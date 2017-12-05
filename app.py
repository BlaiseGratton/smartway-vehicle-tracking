# import os

from flask import Flask, jsonify, send_file
# import requests

from video import init_logging, main

app = Flask(__name__)


@app.route('/api/startcamera')
def start_camera():
    main()
    return jsonify('Started')


@app.route('/api/cameras/')
def get_all_cameras():
    # headers = {'apiKey': os.environ.get('SMARTWAY_KEY')}
    # camera_url = 'https://dev.tdot.tn.gov/opendata/api/public/roadwaycameras'
    # req = requests.get(cameras_url, headers=headers)
    # return jsonify({'data': req.json()})
    return send_file('static/smartway_data.json')


@app.route('/')
def serve_index():
    return send_file('static/index.html')

if __name__ == '__main__':
    init_logging()
    app.run(host='0.0.0.0', port=5300, debug=True)
