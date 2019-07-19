from flask import Flask, request
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)

@app.route("/")
def helloWorld():
  return "Hello, cross-origin-world!"

@app.route("/upload", methods = ['POST'])
def uploadFile():
  print('function reached')
  if request.method == 'POST':
      csvfile = request.files['file']
      # reader = csv.DictReader(csvfile)
      # data = [row for row in reader]
      print(csvfile)
      return 'uploaded'
  
if __name__ == '__main__':
    app.run(port=5000)