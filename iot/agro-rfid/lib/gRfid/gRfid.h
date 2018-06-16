/*
  gRfid.h

  Dev: Rodrigo Pereira Silva
  Data: 2018-06-16
*/

#ifndef GRfid_h
#define GRfid_h

#include "Arduino.h"

class GRfid
{
  public:
    GRfid();
    void setSetup();
    void setLoop();
  private:
    int    _status;
    String _content;
};

#endif
