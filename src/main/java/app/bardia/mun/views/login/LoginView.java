package app.bardia.mun.views.login;
//
//import app.bardia.mun.security.AuthenticatedUser;
//import com.vaadin.flow.component.login.LoginI18n;
//import com.vaadin.flow.component.login.LoginOverlay;
//import com.vaadin.flow.router.BeforeEnterEvent;
//import com.vaadin.flow.router.BeforeEnterObserver;
//import com.vaadin.flow.router.PageTitle;
//import com.vaadin.flow.router.Route;
//import com.vaadin.flow.router.internal.RouteUtil;
//import com.vaadin.flow.server.VaadinService;
//import com.vaadin.flow.server.auth.AnonymousAllowed;
//
//@AnonymousAllowed
//@PageTitle("Login")
//@Route(value = "login")
//public class LoginView extends LoginOverlay implements BeforeEnterObserver {
//
//    private final AuthenticatedUser authenticatedUser;
//
//    public LoginView(AuthenticatedUser authenticatedUser) {
//        this.authenticatedUser = authenticatedUser;
//        setAction(RouteUtil.getRoutePath(VaadinService.getCurrent().getContext(), getClass()));
//
//        LoginI18n i18n = LoginI18n.createDefault();
//        i18n.setHeader(new LoginI18n.Header());
//        i18n.getHeader().setTitle("Dublin Model UN");
//        i18n.getHeader().setDescription("Login using user/user or admin/admin");
//        i18n.setAdditionalInformation(null);
//        setI18n(i18n);
//
//        setForgotPasswordButtonVisible(false);
//        setOpened(true);
//    }
//
//    @Override
//    public void beforeEnter(BeforeEnterEvent event) {
//        if (authenticatedUser.get().isPresent()) {
//            // Already logged in
//            setOpened(false);
//            event.forwardTo("");
//        }
//
//        setError(event.getLocation().getQueryParameters().getParameters().containsKey("error"));
//    }
//}

import com.vaadin.flow.component.html.Anchor;
import com.vaadin.flow.component.orderedlayout.FlexComponent;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.auth.AnonymousAllowed;

@Route("login")
@AnonymousAllowed
public class LoginView extends VerticalLayout {
    /**
     * URL that Spring uses to connect to Google services
     */
    private static final String OAUTH_URL = "/oauth2/authorization/google";

    public LoginView() {
        Anchor loginLink = new Anchor(OAUTH_URL, "Login with Google");
        // Set router-ignore attribute so that Vaadin router doesn't handle the login request
        loginLink.getElement().setAttribute("router-ignore", true);
        add(loginLink);
        getStyle().set("padding", "200px");
        setAlignItems(FlexComponent.Alignment.CENTER);
    }
}
