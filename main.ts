namespace DidacticoBot{
    //%block = avancer a une vitesse
    export function Go_Forward(vitesse:number):void {
        led.plot(vitesse,vitesse-1)
    }
}