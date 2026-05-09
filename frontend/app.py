from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app) # Allows the Express frontend to access this API

@app.route('/api/data', methods=['GET'])
def get_data():
    return jsonify({
        "status": "Success",
        "message": "Hello from the Flask Backend!",
        "version": "1.0.0"
    })

if __name__ == '__main__':
    # Important: host='0.0.0.0' is required for EC2 deployment
    app.run(host='0.0.0.0', port=5000)