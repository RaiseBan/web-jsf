package back;

import java.io.IOException;
import java.io.Serializable;
import java.util.Objects;

public class Validation implements IValidation, Serializable {
    @Override
    public Double validateX(String x) {
        Double doubleX = null;
        try {
            doubleX = Double.parseDouble(x);
            if (doubleX > 2 || doubleX < -2) {
                doubleX = null;
            }
        } catch (Exception e){
            System.out.println("x не прошел валидацию " + doubleX );
        }
        return doubleX;
    }

    @Override
    public Double validateY(String y) {
        Double doubleY = null;
        try {
            doubleY = Double.parseDouble(y);
            if (doubleY > 3 || doubleY < -5) {
                doubleY = null;
            }
        } catch (Exception exception) {
            System.out.println("Y не валидно");
        }

        return doubleY;
    }

    @Override
    public Double validateR(String r) {
        Double doubleR = null;
        if (Objects.equals(r, "")) {
            return null;
        }
        try {
            doubleR = Double.parseDouble(r);
            if (doubleR > 4 || doubleR < 1) {
                doubleR = null;
            }
        } catch (Exception exception) {
            System.out.println("R не валидно");
        }

        return doubleR;
    }
}
