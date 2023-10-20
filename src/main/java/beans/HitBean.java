package beans;
import DAO.MyDAO;
import back.CheckArea;
import back.Validation;
import entity.Shots;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.inject.Named;
import java.io.Serializable;
import java.util.*;
@Named("hitBean")
@ApplicationScoped
public class HitBean implements Serializable {
    private final Map<Double, Boolean> checkboxValues = new HashMap<>();
    private Boolean currentCheckedValue = false;
    private String x;
    private String y;

    private String r = "2";
    private final Validation validation;
    private final CheckArea checkArea;

    @Inject
    MyDAO dataAO;


    public HitBean() {
        validation = new Validation();
        checkArea = new CheckArea();
        // Инициализация значений
        for (double value : new double[]{-2, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 2}) {
            checkboxValues.put(value, false);
        }
    }


    public void submitClick() {

        System.out.println("x = " + this.x);
        System.out.println("y = " + this.y);
        System.out.println("r = " + this.r);

        double numericalX = Double.parseDouble(x);
        double numericalY = Double.parseDouble(y);
        double numericalR = Double.parseDouble(r);

        Shots shot = new Shots();
        shot.setX((float) numericalX);
        shot.setY((float) numericalY);
        shot.setR((float) numericalR);
        shot.setResult(checkArea.hit(numericalX, numericalY, numericalR));
        dataAO.addShot(shot);
    }



    public List<Map.Entry<Double, Boolean>> getSortedCheckboxValues() {
        List<Map.Entry<Double, Boolean>> sortedEntries = new ArrayList<>(checkboxValues.entrySet());
        sortedEntries.sort(Map.Entry.comparingByKey());
        return sortedEntries;
    }
    public Boolean getCurrentCheckedValue() {
        return currentCheckedValue;
    }

    public void setCurrentCheckedValue(Boolean currentCheckedValue) {
        this.currentCheckedValue = currentCheckedValue;
    }



    public void updateX(double value) {
        System.out.println("updateX вызвано со значением: " + value);
        if (currentCheckedValue) {
            x = String.valueOf(value);
            currentCheckedValue = false;
            for (Map.Entry<Double, Boolean> entry : checkboxValues.entrySet()) {
                if (!entry.getKey().equals(value)) {
                    entry.setValue(false);
                } else {
                    entry.setValue(true);
                    setX(String.valueOf(value));
                }
            }
        }
    }







    public String getX() {
        return x;
    }

    public void setX(String x) {
        System.out.println("Установили x");
        this.x = x;
        System.out.println(this.x);
    }

    public String getY() {
        return y;
    }

    public void setY(String y) {
        System.out.println("записали новый Y " + y);
        this.y = y;
    }

    public String getR() {
        return r;
    }

    public void setR(org.primefaces.event.SlideEndEvent event) {
        double newValue = event.getValue();
        this.r = String.valueOf(newValue);
        System.out.println("Установили значение R " + this.r);
    }
}
