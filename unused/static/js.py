#!/usr/bin/python3
""" This module uses the js2py module to run javascript """

import js2py
from flask import Flask
import json

app = Flask(__name__)


def test():
    """test js script"""
    js = """function(name) {
        console.log('Hello ' + name + '!');
    }"""
    hello = js2py.eval_js(js)
    hello("Obed")

@app.route('/<page>', methods=['GET', 'POST'])
def home(page):
    """The home page"""
    return f"This is the {page} Page\n"

def country():
    """ Gets a country's data by name """
    data = js2py.EvalJs(enable_require=True)
    af_countries = data.execute("require('@babajidemm/african-countries-api');")
    countryData = data.execute("af_countries.byName('Benin');")
    js = data.execute("console.log(countryData.body);")

    print(js)
    #js = json.dumps((js))
    #output = js2py.EvalJs(js, enable_require=True)
    #print(output)
    #data = json.loads(output)
    #print(f"{data[0]}")


def ghana():
    """Get Ghana's info"""
    with open("nigeria.json", "r") as nig:
        content = json.loads(nig.read())
        #print(f"Ghana's official name: {name[0]['name']['common']}")
        #print(f"Ghana: {}")
        try:
            print('Nigeria:')
            #print("All:\n{content[0]}")
            print(f"Continent: {content[0]['region']}")
            print(f"Region: {content[0]['subregion']}")
            print(f"Capital City: {content[0]['capital']}")
            print(f"Cities: {content[0]['cities'].items()}\n")
        except Exception as e:
            print("Sorry, The Index Is Out Of Range Or There Is An Error.\nPlease Check And Try Again")

if __name__ == '__main__':
#    test()
#    app.run(host='0.0.0.0', port=5000)
    country()
