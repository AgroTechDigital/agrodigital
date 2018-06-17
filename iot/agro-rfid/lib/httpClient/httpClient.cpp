/*
  httpClient.cpp

  Dev: Rodrigo Pereira Silva
  Data: 2018-06-16
*/

#include <Arduino.h>
#include <ESP8266HTTPClient.h>
#include "httpClient.h"

HTTPClient http;

HttpClient::HttpClient()
{

}

String HttpClient::get(String url)
{

    String payload;

    http.begin(url);

    int httpCode = http.GET();

    if(httpCode > 0) {

      if(httpCode == HTTP_CODE_OK) {

          payload = http.getString();

      }

    }
    else {

      Serial.printf("HTTP GET falha, error: %s\n", http.errorToString(httpCode).c_str());

    }

    http.end();

    return payload;

};

String HttpClient::post(String url, String contentType, String body)
{

    String payload;

    http.begin(url);
    http.addHeader("Content-Type", contentType);

    int httpCode = http.POST(body);

    if(httpCode > 0) {

      if(httpCode == HTTP_CODE_OK) {

          payload = http.getString();

      }

    }
    else {

      Serial.printf("HTTP POST falha, error: %s\n", http.errorToString(httpCode).c_str());

    }

    http.end();

    return payload;

};
