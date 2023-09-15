package app.bardia.mun.views.delegateinfo;

import app.bardia.mun.data.entity.User;
import app.bardia.mun.data.service.SamplePersonService;
import app.bardia.mun.data.service.UserService;
import app.bardia.mun.security.AuthenticatedUser;
import app.bardia.mun.views.MainLayout;
import app.bardia.mun.data.entity.SamplePerson;
import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.Composite;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.button.ButtonVariant;
import com.vaadin.flow.component.combobox.ComboBox;
import com.vaadin.flow.component.customfield.CustomField;
import com.vaadin.flow.component.datepicker.DatePicker;
import com.vaadin.flow.component.dependency.Uses;
import com.vaadin.flow.component.formlayout.FormLayout;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.html.H3;
import com.vaadin.flow.component.icon.Icon;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.EmailField;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.data.binder.Binder;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.theme.lumo.LumoUtility;
import jakarta.annotation.security.PermitAll;

import java.util.Optional;

@PageTitle("Delegate Info")
@Route(value = "delegate-info", layout = MainLayout.class)
@PermitAll
@Uses(Icon.class)
public class DelegateInfoView extends Div {

    private TextField firstName = new TextField("First Name");
    private TextField lastName = new TextField("Last Name");
    private EmailField username = new EmailField("School Email");
    private TextField discordUsername = new TextField("Discord Username");
    private PhoneNumberField phone = new PhoneNumberField("Phone");
    private ComboBox<String> grade = new ComboBox<>("Grade");

    private Button cancel = new Button("Cancel");
    private Button save = new Button("Save");

    private Binder<User> binder = new Binder<>(User.class);

    public DelegateInfoView(AuthenticatedUser authenticatedUser, UserService userService) {
        addClassName("delegate-info-view");
        add(createTitle());
        add(createFormLayout());
        add(createButtonLayout());
        addClassName(LumoUtility.Margin.XLARGE);

        Optional<User> maybeUser = authenticatedUser.get();
        User currentUser = maybeUser.get();

        binder.bindInstanceFields(this);
        binder.setBean(currentUser);

//        firstName.setValue(currentUser.getFirstName());
//        lastName.setValue(currentUser.getLastName());
//        email.setValue(currentUser.getEmail());
//        discordUsername.setValue(currentUser.getDiscordUsername());
//        phone.setPresentationValue(currentUser.getPhone());
        //grade.setLabel(currentUser.getGrade());

        cancel.addClickListener(e -> clearForm());
        save.addClickListener(e -> {
            userService.update(binder.getBean());
            Notification.show(binder.getBean().getClass().getSimpleName() + " details stored.");
            //clearForm();
        });
    }

    private void clearForm() {
        binder.setBean(new User());
    }

    private Component createTitle() {
        return new H3("Delegate Info");
    }

    private Component createFormLayout() {
        FormLayout formLayout = new FormLayout();
        username.setErrorMessage("Please enter a valid email address");
        grade.setItems("Freshman", "Sophomore", "Junior", "Senior");
        formLayout.add(firstName, lastName, discordUsername, phone, username, grade);
        return formLayout;
    }

    private Component createButtonLayout() {
        HorizontalLayout buttonLayout = new HorizontalLayout();
        //buttonLayout.setMargin(true);
        buttonLayout.addClassName("button-layout");
        save.addThemeVariants(ButtonVariant.LUMO_PRIMARY);
        buttonLayout.add(save);
        buttonLayout.add(cancel);
        return buttonLayout;
    }

    private static class PhoneNumberField extends CustomField<String> {
        private ComboBox<String> countryCode = new ComboBox<>();
        private TextField number = new TextField();

        public PhoneNumberField(String label) {
            setLabel(label);
            countryCode.setWidth("120px");
            countryCode.setPlaceholder("Country");
            countryCode.setAllowedCharPattern("[\\+\\d]");
            countryCode.setItems("+354", "+91", "+62", "+98", "+964", "+353", "+44", "+972", "+39", "+225");
            countryCode.addCustomValueSetListener(e -> countryCode.setValue(e.getDetail()));
            number.setAllowedCharPattern("\\d");
            HorizontalLayout layout = new HorizontalLayout(countryCode, number);
            layout.setFlexGrow(1.0, number);
            add(layout);
        }

        @Override
        protected String generateModelValue() {
            if (countryCode.getValue() != null && number.getValue() != null) {
                String s = countryCode.getValue() + " " + number.getValue();
                return s;
            }
            return "";
        }

        @Override
        protected void setPresentationValue(String phoneNumber) {
            String[] parts = phoneNumber != null ? phoneNumber.split(" ", 2) : new String[0];
            if (parts.length == 1) {
                countryCode.clear();
                number.setValue(parts[0]);
            } else if (parts.length == 2) {
                countryCode.setValue(parts[0]);
                number.setValue(parts[1]);
            } else {
                countryCode.clear();
                number.clear();
            }
        }
    }

}