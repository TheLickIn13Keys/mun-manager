package app.bardia.mun.data.entity;

import jakarta.persistence.Entity;

import java.util.Date;
@Entity
public class Conference extends AbstractEntity{
    private String name;
    private String location;
    private int cost;
    private Date date;
    private int registeredMembers;

//    public Conference(String name, String location, int cost, Date date, int registeredMembers) {
//        this.name = name;
//        this.location = location;
//        this.cost = cost;
//        this.date = date;
//        this.registeredMembers = registeredMembers;
//    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public int getCost() {
        return cost;
    }

    public void setCost(int cost) {
        this.cost = cost;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public int getRegisteredMembers() {
        return registeredMembers;
    }

    public void setRegisteredMembers(int registeredMembers) {
        this.registeredMembers = registeredMembers;
    }

}
