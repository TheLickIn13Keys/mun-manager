package app.bardia.mun.views;

import app.bardia.mun.data.entity.User;
import app.bardia.mun.security.AuthenticatedUser;
import app.bardia.mun.views.adminedit.AdminEditView;
import app.bardia.mun.views.announcements.AnnouncementsView;
import app.bardia.mun.views.attendance.AttendanceView;
import app.bardia.mun.views.checkout.CheckoutView;
import app.bardia.mun.views.conferences.ConferencesView;
import app.bardia.mun.views.delegateinfo.DelegateInfoView;
import app.bardia.mun.views.members.MembersView;
import app.bardia.mun.views.welcome.WelcomeView;
import com.vaadin.flow.component.applayout.AppLayout;
import com.vaadin.flow.component.applayout.DrawerToggle;
import com.vaadin.flow.component.avatar.Avatar;
import com.vaadin.flow.component.contextmenu.MenuItem;
import com.vaadin.flow.component.html.Anchor;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.html.Footer;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.html.H2;
import com.vaadin.flow.component.html.Header;
import com.vaadin.flow.component.icon.Icon;
import com.vaadin.flow.component.menubar.MenuBar;
import com.vaadin.flow.component.orderedlayout.Scroller;
import com.vaadin.flow.component.sidenav.SideNav;
import com.vaadin.flow.component.sidenav.SideNavItem;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.server.StreamResource;
import com.vaadin.flow.server.auth.AccessAnnotationChecker;
import com.vaadin.flow.theme.lumo.LumoUtility;
import java.io.ByteArrayInputStream;
import java.util.Optional;
import org.vaadin.lineawesome.LineAwesomeIcon;

/**
 * The main view is a top-level placeholder for other views.
 */
public class MainLayout extends AppLayout {

    private H2 viewTitle;

    private AuthenticatedUser authenticatedUser;
    private AccessAnnotationChecker accessChecker;

    public MainLayout(AuthenticatedUser authenticatedUser, AccessAnnotationChecker accessChecker) {
        this.authenticatedUser = authenticatedUser;
        this.accessChecker = accessChecker;

        setPrimarySection(Section.DRAWER);
        addDrawerContent();
        addHeaderContent();
    }

    private void addHeaderContent() {
        DrawerToggle toggle = new DrawerToggle();
        toggle.setAriaLabel("Menu toggle");

        viewTitle = new H2();
        viewTitle.addClassNames(LumoUtility.FontSize.LARGE, LumoUtility.Margin.NONE);

        addToNavbar(true, toggle, viewTitle);
    }

    private void addDrawerContent() {
        H1 appName = new H1("Dublin Model UN");
        appName.addClassNames(LumoUtility.FontSize.LARGE, LumoUtility.Margin.NONE);
        Header header = new Header(appName);

        Scroller scroller = new Scroller(createNavigation());

        addToDrawer(header, scroller, createFooter());
    }

    private SideNav createNavigation() {
        SideNav nav = new SideNav();

        if (accessChecker.hasAccess(WelcomeView.class)) {
            nav.addItem(new SideNavItem("Welcome", WelcomeView.class, LineAwesomeIcon.GLOBE_AMERICAS_SOLID.create()));

        }
        if (accessChecker.hasAccess(AnnouncementsView.class)) {
            nav.addItem(
                    new SideNavItem("Announcements", AnnouncementsView.class, LineAwesomeIcon.BULLHORN_SOLID.create()));

        }
        if (accessChecker.hasAccess(DelegateInfoView.class)) {
            nav.addItem(new SideNavItem("Delegate Info", DelegateInfoView.class, LineAwesomeIcon.USER.create()));

        }
        if (accessChecker.hasAccess(ConferencesView.class)) {
            nav.addItem(new SideNavItem("Conferences", ConferencesView.class, LineAwesomeIcon.MAP.create()));

        }
        if (accessChecker.hasAccess(AttendanceView.class)) {
            nav.addItem(
                    new SideNavItem("Attendance", AttendanceView.class, LineAwesomeIcon.CHECK_CIRCLE_SOLID.create()));

        }
        if (accessChecker.hasAccess(CheckoutView.class)) {
            nav.addItem(new SideNavItem("Checkout", CheckoutView.class, LineAwesomeIcon.CREDIT_CARD.create()));

        }
        if (accessChecker.hasAccess(MembersView.class)) {
            nav.addItem(new SideNavItem("Members", MembersView.class, LineAwesomeIcon.LIST_SOLID.create()));

        }
        if (accessChecker.hasAccess(AdminEditView.class)) {
            nav.addItem(new SideNavItem("Admin Edit", AdminEditView.class, LineAwesomeIcon.PENCIL_ALT_SOLID.create()));

        }

        return nav;
    }

    private Footer createFooter() {
        Footer layout = new Footer();

        Optional<User> maybeUser = authenticatedUser.get();
        if (maybeUser.isPresent()) {
            User user = maybeUser.get();

            Avatar avatar = new Avatar(user.getName());
            StreamResource resource = new StreamResource("profile-pic",
                    () -> new ByteArrayInputStream(user.getProfilePicture()));
            avatar.setImageResource(resource);
            avatar.setThemeName("xsmall");
            avatar.getElement().setAttribute("tabindex", "-1");

            MenuBar userMenu = new MenuBar();
            userMenu.setThemeName("tertiary-inline contrast");

            MenuItem userName = userMenu.addItem("");
            Div div = new Div();
            div.add(avatar);
            div.add(user.getName());
            div.add(new Icon("lumo", "dropdown"));
            div.getElement().getStyle().set("display", "flex");
            div.getElement().getStyle().set("align-items", "center");
            div.getElement().getStyle().set("gap", "var(--lumo-space-s)");
            userName.add(div);
            userName.getSubMenu().addItem("Sign out", e -> {
                authenticatedUser.logout();
            });

            layout.add(userMenu);
        } else {
            Anchor loginLink = new Anchor("login", "Sign in");
            layout.add(loginLink);
        }

        return layout;
    }

    @Override
    protected void afterNavigation() {
        super.afterNavigation();
        viewTitle.setText(getCurrentPageTitle());
    }

    private String getCurrentPageTitle() {
        PageTitle title = getContent().getClass().getAnnotation(PageTitle.class);
        return title == null ? "" : title.value();
    }
}
