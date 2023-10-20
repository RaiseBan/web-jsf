package back;

import java.io.Serializable;

public class CheckArea implements ICheckArea, Serializable {

    @Override
    public boolean hit(double x, double y, double r) {
        return (hitCircle(x,y,r) || hitSquare(x,y,r) || hitTriangle(x,y,r));
    }

    @Override
    public boolean hitCircle(double x, double y, double r) {
        if ((x >= 0) && (y >= 0)){
            return x * x + y * y <= r * r;
        } else return false;
    }

    @Override
    public boolean hitSquare(double x, double y, double r) {
        if ((x <= 0) && (y >= 0)){
            return (-x <= 2 * r && y <= r);
        }
        else return false;
    }

    @Override
    public boolean hitTriangle(double x, double y, double r) {
        if ((x <= 0) && (y <= 0)){
            boolean res = (y >= -2 * x - r * 2);
            System.out.println(res);
            return (y >= -2 * x - r * 2);
        } else return false;
    }
}
