package app.bardia.mun.data.entity;

import app.bardia.mun.data.Role;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.List;
import java.util.Set;

@Entity
@Table(name = "application_user")
public class User extends AbstractEntity {

    private String username;
    private String name;
    @JsonIgnore
    private String hashedPassword;
    @Enumerated(EnumType.STRING)
    @ElementCollection(fetch = FetchType.EAGER)
    private Set<Role> roles;
    @Lob
    @Column(length = 1000000)
    private byte[] profilePicture;
    private boolean isActive;
    private String email;
    private int consecutiveAbsences;
    @OneToMany
    private List<Conference> conferencesRegistered;

    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getHashedPassword() {
        return hashedPassword;
    }
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
    public void setActive(boolean active) { isActive = active; }
    public boolean isActive() { return isActive; }
    public String getEmail() { return email;}
    public void setEmail(String email) { this.email = email; }
    public int getConsecutiveAbsences() { return consecutiveAbsences; }
    public void setConsecutiveAbsences(int consecutiveAbsences) { this.consecutiveAbsences = consecutiveAbsences; }
    public List<Conference> getConferencesRegistered() { return conferencesRegistered; }
    public void setConferencesRegistered(List<Conference> conferencesRegistered) { this.conferencesRegistered = conferencesRegistered; }
}
