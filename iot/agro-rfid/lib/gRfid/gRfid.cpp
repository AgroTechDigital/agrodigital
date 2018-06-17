/*
  gRfid.cpp

  Dev: Rodrigo Pereira Silva
  Data: 2018-06-16
*/

#include <Arduino.h>
#include <SPI.h>
#include <MFRC522.h>
#include "gRfid.h"
#include "../httpClient/httpClient.h"

#define SS_PIN  4  //D2 NodeMCU 12-E
#define RST_PIN 5  //D1 NodeMCU 12-E

const int buzzer =  0;

MFRC522 mfrc522(SS_PIN, RST_PIN);

HttpClient httpClient;

GRfid::GRfid()
{

  _status  = 0;
  _content = "";

}

void bipBuzzer(int qtBip){

  for (byte i = 1; i <= qtBip; i++)
  {

    digitalWrite(buzzer, HIGH);
    delay(100);
    digitalWrite(buzzer, LOW);
    delay(100);

  }

}

void GRfid::setSetup()
{

  pinMode(buzzer, OUTPUT);
  digitalWrite(buzzer, LOW);
  SPI.begin();
  mfrc522.PCD_Init();

};

void GRfid::setLoop()
{

  if ( ! mfrc522.PICC_IsNewCardPresent())
  {
    return;
  }

  if ( ! mfrc522.PICC_ReadCardSerial())
  {
    return;
  }

  Serial.println();
  Serial.print("ENDEREÇO UID tag :");

  _content = "";

  for (byte i = 0; i < mfrc522.uid.size; i++)
  {
     Serial.print(mfrc522.uid.uidByte[i] < 0x10 ? "0" : "");
     Serial.print(mfrc522.uid.uidByte[i], HEX);
     _content.concat(String(mfrc522.uid.uidByte[i] < 0x10 ? "0" : ""));
     _content.concat(String(mfrc522.uid.uidByte[i], HEX));
  }

  _content.toUpperCase();

  if(_content.length() > 0){

    Serial.println();
    Serial.println(_content);

    bipBuzzer(1);

    String request = "";

    String body = "{'etiqueta':'999', 'peso': 100}";

    request = httpClient.post("http://192.168.1.20:3000/api/animalRFIDs", "json", body);

    Serial.println();
    Serial.print("http client : ");
    Serial.println(request);
    Serial.println();

  }

};
