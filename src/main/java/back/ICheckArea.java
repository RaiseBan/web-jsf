package back;

public interface ICheckArea {

    String hit(double x, double y, double r);
    String hitCircle(double x, double y, double r);
    String hitSquare(double x, double y, double r);
    String hitTriangle(double x, double y, double r);
}
