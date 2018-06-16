/*
  man.cpp

  Dev: Rodrigo Pereira Silva
  Data: 2018-06-16
*/

#include <Arduino.h>
#include <ESP8266WiFi.h>
#include "../lib/gRfid/gRfid.h"

const char* _ssidAp      = "SEBRAE01";
const char* _passwordAp  = "Treinament0";

GRfid gRfid;

bool testWifi()
{

  int c = 0;
  Serial.println("Aguardando conexão Wi-Fi");
  while ( c < 20 ) {
    if (WiFi.status() == WL_CONNECTED) {
      return true;
    }
    else{
      long rssi = WiFi.RSSI();
      Serial.print("RSSI:");
      Serial.println(rssi);
    }

    delay(1000);
    Serial.print(".");
    c++;
  }

  WiFi.printDiag(Serial);

  Serial.println(WiFi.status());
  Serial.println("");
  Serial.println("A conexão expirou");
  return false;

}

void wifiSetSetup()
{

  delay(1000);

  Serial.println("");
  Serial.println(WiFi.softAPmacAddress());

  Serial.println();
	Serial.println("Iniciando Wi-fi...");

  Serial.println("Config Wifi");
  Serial.print("SSID: ");
  Serial.println(_ssidAp);

  WiFi.mode(WIFI_STA); //set mode to WIFI_AP, WIFI_STA, WIFI_AP_STA
  WiFi.begin(_ssidAp, _passwordAp);

  testWifi();

}

void setup() {

  Serial.begin(115200);

  wifiSetSetup();

  gRfid.setSetup();

}

void loop() {

  gRfid.setLoop();

}
