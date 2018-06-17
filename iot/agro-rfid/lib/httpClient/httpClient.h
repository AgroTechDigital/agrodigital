/*
  httpClient.h

  Dev: Rodrigo Pereira Silva
  Data: 2018-06-16
*/

#ifndef HttpClient_h
#define HttpClient_h

#include "Arduino.h"

class HttpClient
{

  public:
    HttpClient();
    String get(String url);
    String post(String url, String contentType, String body);

  private:

};

#endif
