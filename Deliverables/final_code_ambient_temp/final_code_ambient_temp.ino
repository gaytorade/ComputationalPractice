/**************************************************************************/
/*!
    @file     Adafruit_MPL3115A2.cpp
    @author   K.Townsend (Adafruit Industries)
    @license  BSD (see license.txt)

    Example for the MPL3115A2 barometric pressure sensor

    This is a library for the Adafruit MPL3115A2 breakout
    ----> https://www.adafruit.com/products/1893

    Adafruit invests time and resources providing this open source code,
    please support Adafruit and open-source hardware by purchasing
    products from Adafruit!

    @section  HISTORY

    v1.0 - First release
*/
/**************************************************************************/

#include <Wire.h>
#include <Adafruit_MPL3115A2.h>
#include <Adafruit_NeoPixel.h>
// Power by connecting Vin to 3-5V, GND to GND
// Uses I2C - connect SCL to the SCL pin, SDA to SDA pin
// See the Wire tutorial for pinouts for each Arduino
// http://arduino.cc/en/reference/wire
Adafruit_MPL3115A2 baro = Adafruit_MPL3115A2();
#define PIN            8

// How many NeoPixels are attached to the Arduino?
#define N_LEDS      8
Adafruit_NeoPixel pixels = Adafruit_NeoPixel(N_LEDS, PIN, NEO_GRB + NEO_KHZ800);

void setup() {
  Serial.begin(9600);
  Serial.println("Adafruit_MPL3115A2 test!");
   pixels.begin(); // This initializes the NeoPixel library.
   for(int i=0;i<N_LEDS;i++){

    // pixels.Color takes RGB values, from 0,0,0 up to 255,255,255
    pixels.setPixelColor(i, pixels.Color(0,0,255)); // Moderately bright green color.

    pixels.show(); // This sends the updated pixel color to the hardware.

    delay(500); // Delay for a period of time (in milliseconds).

  }
}

void loop() {
  if (! baro.begin()) {
    Serial.println("Couldnt find sensor");
    return;
  }
  
  float pascals = baro.getPressure();
  // Our weather page presents pressure in Inches (Hg)
  // Use http://www.onlineconversion.com/pressure.htm for other units
 // Serial.print(pascals/3377); Serial.println(" Inches (Hg)");

  float altm = baro.getAltitude();
//  Serial.print(altm); Serial.println(" meters");

  float tempC = baro.getTemperature();
  //Serial.print(tempC); Serial.println("*C");
  float temperature= tempC * 1.8 + 32;
  Serial.print(temperature); Serial.println(" F");

  delay(250);
  Lights(temperature);
}

int Lights(float temperature){
if(temperature<50.0){
  // All blue
  for(int i=0;i<N_LEDS;i++){
    pixels.setPixelColor(i, pixels.Color(0,0,255));
  }
   pixels.show();
}
if((temperature>50.0) && (temperature<65.0)){
  for(int j=0;j<N_LEDS/2;j++){
    pixels.setPixelColor(j, pixels.Color(255,0,0));
  }
  for(int k=N_LEDS/2;k<N_LEDS;k++){
    pixels.setPixelColor(k, pixels.Color(0,0,255));
  }
  pixels.show();
}
if(temperature>65.0){
  pixels.setPixelColor(0, pixels.Color(128,0,128)); // purpule on bottom
  for(int i=1;i<N_LEDS;i++){
    pixels.setPixelColor(i, pixels.Color(255,0,0));
  }
   pixels.show();
}
}
//void Lights(){
//  if(temperature<50.0){
// for(int i=0;i<NUMPIXELS;i++){
//
//    // pixels.Color takes RGB values, from 0,0,0 up to 255,255,255
//    pixels.setPixelColor(i, pixels.Color(0,0,255)); //BLue
//
//    pixels.show(); // This sends the updated pixel color to the hardware.
//
//    delay(500); // Delay for a period of time (in milliseconds).
//
//  }
//}
