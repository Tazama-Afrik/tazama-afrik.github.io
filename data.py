from flask import Flask, render_template, request
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']

@app.route('/')
def home():
    """Homepage"""
    return render_template('index.html')


@app.route('/process', methods=['POST'])
def message():
    """I have something to say"""
    name = request.form['name']
    message = request.form['message']
    return render_template('index.html', name=name, message=message)

if __name__ == '__main__':
    app.run(debug=True, port=5000)