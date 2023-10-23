package beans;


import javax.enterprise.context.ApplicationScoped;
import javax.faces.bean.ManagedBean;
import javax.inject.Named;

@Named("jsBean")
@ApplicationScoped
public class JSBean {
    private String x;
    private String y;
    private String r;

    public String getX() {
        return x;
    }

    public void setX(String x) {
        System.out.println("setX " + x);
        this.x = x;
    }

    public String getY() {
        return y;
    }

    public void setY(String y) {
        System.out.println("setY " + y);
        this.y = y;
    }

    public String getR() {
        return r;
    }

    public void setR(String r) {
        System.out.println("setR " + r);
        this.r = r;
    }
}
