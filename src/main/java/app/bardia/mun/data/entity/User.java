package app.bardia.mun.data.entity;

import app.bardia.mun.data.Grade;
import app.bardia.mun.data.Role;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.List;
import java.util.Set;

@Entity
@Table(name = "application_user")
public class User extends AbstractEntity {

    private String username;
    private String firstName;
    private String lastName;
    @JsonIgnore
    private String hashedPassword;
    @Enumerated(EnumType.STRING)
    @ElementCollection(fetch = FetchType.EAGER)
    private Set<Role> roles;
    @Lob
    @Column(length = 1000000)
    private byte[] profilePicture;
    //private boolean isActive;
//    private int consecutiveAbsences;
//    @OneToMany
//    private List<Conference> conferencesRegistered;
    private String phone;
    private String discordUsername;
    private String grade;

    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getFirstName() {
        return firstName;
    }
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
    public String getLastName() {
        return lastName;
    }
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
    public String getHashedPassword() { return hashedPassword;}
    public void setHashedPassword(String hashedPassword) {
        this.hashedPassword = hashedPassword;
    }
    public Set<Role> getRoles() {
        return roles;
    }
    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }
    public byte[] getProfilePicture() {
        return profilePicture;
    }
    public void setProfilePicture(byte[] profilePicture) {
        this.profilePicture = profilePicture;
    }
    //public void setActive(boolean active) { isActive = active; }
    //public boolean isActive() { return isActive; }
//    public int getConsecutiveAbsences() { return consecutiveAbsences; }
//    public void setConsecutiveAbsences(int consecutiveAbsences) { this.consecutiveAbsences = consecutiveAbsences; }
//    public List<Conference> getConferencesRegistered() { return conferencesRegistered; }
//    public void setConferencesRegistered(List<Conference> conferencesRegistered) { this.conferencesRegistered = conferencesRegistered; }
//    public void addConference(Conference conference){
//        conferencesRegistered.add(conference);
//    }
    public String getPhone() {
        return phone;
    }
    public void setPhone(String phone) {
        this.phone = phone;
    }
    public String getDiscordUsername() {
        return discordUsername;
    }
    public void setDiscordUsername(String discordUsername) {
        this.discordUsername = discordUsername;
    }
    public String getGrade() {
        return grade;
    }
    public void setGrade(String grade) {
        this.grade = grade;
    }
}
