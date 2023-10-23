package back;

import java.io.Serializable;

public class CheckArea implements ICheckArea, Serializable {

    @Override
    public String hit(double x, double y, double r) {
        if (x > 0 && y > 0){
            return hitTriangle(x, y, r);
        }
        if (x > 0 && y < 0) {
            System.out.println("Мы в rb");
            return hitCircle(x, y, r);

        }
        if (x < 0 && y < 0){
            return hitSquare(x, y, r);
        }
        if ((x == 0 && y <= r && y >= -r) || (y == 0 && x <= r && x >= -r)){
            return "In";
        }else{
            return "Out";
        }
    }

    @Override
    public String hitCircle(double x, double y, double r) {
        if (x*x + y*y <= r*r){
            return "In";
        }
        return "Out";
    }

    @Override
    public String hitSquare(double x, double y, double r) {
        if (x >= -r && y >= -r){
            return "In";
        }
        return "Out";
    }

    @Override
    public String hitTriangle(double x, double y, double r) {
        if (y <= -2*x + r){
            return "In";
        }
        return "Out";
    }
}
