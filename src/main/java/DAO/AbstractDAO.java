package DAO;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.hibernate.Transaction;

import java.util.List;

public abstract class AbstractDAO<T> implements DAO<T> {
    private static SessionFactory sessionFactory;

    static {
        try {
            sessionFactory = new Configuration().configure("hibernate.cfg.xml").buildSessionFactory();
        } catch (Throwable ex) {
            throw new ExceptionInInitializerError(ex);
        }
    }

    private Session getCurrentSession() {
        return sessionFactory.getCurrentSession();
    }

    private final Class<T> clazz;

    protected AbstractDAO(Class<T> clazz) {
        this.clazz = clazz;
    }

    public void clear() {
        Session session = getCurrentSession();
        Transaction transaction = null;
        try {
            transaction = session.beginTransaction();
            session.createQuery("DELETE FROM " + clazz.getName()).executeUpdate();
            transaction.commit();
        } catch (Exception e) {
            if (transaction != null) transaction.rollback();
            throw e;
        }
    }

    public List<T> getAll() {
        Session session = getCurrentSession();
        Transaction transaction = null;
        try {
            transaction = session.beginTransaction();
            List<T> resultList = session.createQuery("FROM " + clazz.getName(), clazz).list();
            transaction.commit();
            return resultList;
        } catch (Exception e) {
            if (transaction != null) transaction.rollback();
            throw e;
        }
    }

    public void addShot(T entity) {
        Session session = getCurrentSession();
        Transaction transaction = null;
        try {
            transaction = session.beginTransaction();
            session.save(entity);
            transaction.commit();
        } catch (Exception e) {
            if (transaction != null) transaction.rollback();
            throw e;
        }
    }

    public boolean isEmpty() {
        return getAll().isEmpty();
    }
}
