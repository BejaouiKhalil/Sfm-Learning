
import React, { Component } from 'react';
class navBar extends Component {
    state = {  }
    render() { 
        return ( 
           <div>
  <div className="sidebar-menu toggle-others fixed">
    <div className="sidebar-menu-inner">
      <header className="logo-env">
        <div className="logo">
          <a href="dashboard-1.html" className="logo-expanded">
            <img src="assets/images/logo@2x.png" width={80} alt />
          </a>
          <a href="dashboard-1.html" className="logo-collapsed">
            <img src="assets/images/logo-collapsed@2x.png" width={40} alt />
          </a>
        </div>
        <div className="mobile-menu-toggle visible-xs">
          <a href="#" data-toggle="user-info-menu">
            <i className="fa-bell-o" />
            <span className="badge badge-success">7</span>
          </a>
          <a href="#" data-toggle="mobile-menu">
            <i className="fa-bars" />
          </a>
        </div>
        <div className="settings-icon">
          <a href="#" data-toggle="settings-pane" data-animate="true">
            <i className="linecons-cog" />
          </a>
        </div>
      </header>
      <ul id="main-menu" className="main-menu">
        <li className="active opened active">
          <a href="dashboard-1.html">
            <i className="linecons-cog" />
            <span className="title">Dashboard</span>
          </a>
          <ul>
            <li className="active">
              <a href="dashboard-1.html">
                <span className="title">Dashboard 1</span>
              </a>
            </li>
            <li>
              <a href="dashboard-2.html">
                <span className="title">Dashboard 2</span>
              </a>
            </li>
            <li>
              <a href="dashboard-3.html">
                <span className="title">Dashboard 3</span>
              </a>
            </li>
            <li>
              <a href="dashboard-4.html">
                <span className="title">Dashboard 4</span>
              </a>
            </li>
            <li>
              <a href="skin-generator.html">
                <span className="title">Skin Generator</span>
              </a>
            </li>
            <li>
              <a href="update-highlights.html">
                <span className="title">Update Highlights</span>
                <span className="label label-pink pull-right hidden-collapsed">v1.3</span>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="layout-variants.html">
            <i className="linecons-desktop" />
            <span className="title">Layouts</span>
          </a>
          <ul>
            <li>
              <a href="layout-variants.html">
                <span className="title">Layout Variants &amp; API</span>
              </a>
            </li>
            <li>
              <a href="layout-collapsed-sidebar.html">
                <span className="title">Collapsed Sidebar</span>
              </a>
            </li>
            <li>
              <a href="layout-static-sidebar.html">
                <span className="title">Static Sidebar</span>
              </a>
            </li>
            <li>
              <a href="layout-horizontal-menu.html">
                <span className="title">Horizontal Menu</span>
              </a>
            </li>
            <li>
              <a href="layout-horizontal-plus-sidebar.html">
                <span className="title">Horizontal &amp; Sidebar Menu</span>
              </a>
            </li>
            <li>
              <a href="layout-horizontal-menu-click-to-open-subs.html">
                <span className="title">Horizontal Open On Click</span>
              </a>
            </li>
            <li>
              <a href="layout-horizontal-menu-min.html">
                <span className="title">Horizontal Menu Minimal</span>
              </a>
            </li>
            <li>
              <a href="layout-right-sidebar.html">
                <span className="title">Right Sidebar</span>
              </a>
            </li>
            <li>
              <a href="layout-chat-open.html">
                <span className="title">Chat Open</span>
              </a>
            </li>
            <li>
              <a href="layout-horizontal-sidebar-menu-collapsed-right.html">
                <span className="title">Both Menus &amp; Collapsed</span>
              </a>
            </li>
            <li>
              <a href="layout-boxed.html">
                <span className="title">Boxed Layout</span>
              </a>
            </li>
            <li>
              <a href="layout-boxed-horizontal-menu.html">
                <span className="title">Boxed &amp; Horizontal Menu</span>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="ui-panels.html">
            <i className="linecons-note" />
            <span className="title">UI Elements</span>
          </a>
          <ul>
            <li>
              <a href="ui-panels.html">
                <span className="title">Panels</span>
              </a>
            </li>
            <li>
              <a href="ui-buttons.html">
                <span className="title">Buttons</span>
              </a>
            </li>
            <li>
              <a href="ui-tabs-accordions.html">
                <span className="title">Tabs &amp; Accordions</span>
              </a>
            </li>
            <li>
              <a href="ui-modals.html">
                <span className="title">Modals</span>
              </a>
            </li>
            <li>
              <a href="ui-breadcrumbs.html">
                <span className="title">Breadcrumbs</span>
              </a>
            </li>
            <li>
              <a href="ui-blockquotes.html">
                <span className="title">Blockquotes</span>
              </a>
            </li>
            <li>
              <a href="ui-progressbars.html">
                <span className="title">Progress Bars</span>
              </a>
            </li>
            <li>
              <a href="ui-navbars.html">
                <span className="title">Navbars</span>
              </a>
            </li>
            <li>
              <a href="ui-alerts.html">
                <span className="title">Alerts</span>
              </a>
            </li>
            <li>
              <a href="ui-pagination.html">
                <span className="title">Pagination</span>
              </a>
            </li>
            <li>
              <a href="ui-typography.html">
                <span className="title">Typography</span>
              </a>
            </li>
            <li>
              <a href="ui-other-elements.html">
                <span className="title">Other Elements</span>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="ui-widgets.html">
            <i className="linecons-star" />
            <span className="title">Widgets</span>
          </a>
        </li>
        <li>
          <a href="mailbox-main.html">
            <i className="linecons-mail" />
            <span className="title">Mailbox</span>
            <span className="label label-success pull-right">5</span>
          </a>
          <ul>
            <li>
              <a href="mailbox-main.html">
                <span className="title">Inbox</span>
              </a>
            </li>
            <li>
              <a href="mailbox-compose.html">
                <span className="title">Compose Message</span>
              </a>
            </li>
            <li>
              <a href="mailbox-message.html">
                <span className="title">View Message</span>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="tables-basic.html">
            <i className="linecons-database" />
            <span className="title">Tables</span>
          </a>
          <ul>
            <li>
              <a href="tables-basic.html">
                <span className="title">Basic Tables</span>
              </a>
            </li>
            <li>
              <a href="tables-responsive.html">
                <span className="title">Responsive Table</span>
              </a>
            </li>
            <li>
              <a href="tables-datatables.html">
                <span className="title">Data Tables</span>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="forms-native.html">
            <i className="linecons-params" />
            <span className="title">Forms</span>
          </a>
          <ul>
            <li>
              <a href="forms-native.html">
                <span className="title">Native Elements</span>
              </a>
            </li>
            <li>
              <a href="forms-advanced.html">
                <span className="title">Advanced Plugins</span>
              </a>
            </li>
            <li>
              <a href="forms-wizard.html">
                <span className="title">Form Wizard</span>
              </a>
            </li>
            <li>
              <a href="forms-validation.html">
                <span className="title">Form Validation</span>
              </a>
            </li>
            <li>
              <a href="forms-input-masks.html">
                <span className="title">Input Masks</span>
              </a>
            </li>
            <li>
              <a href="forms-file-upload.html">
                <span className="title">File Upload</span>
              </a>
            </li>
            <li>
              <a href="forms-editors.html">
                <span className="title">Editors</span>
              </a>
            </li>
            <li>
              <a href="forms-sliders.html">
                <span className="title">Sliders</span>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="extra-gallery.html">
            <i className="linecons-beaker" />
            <span className="title">Extra</span>
            <span className="label label-purple pull-right hidden-collapsed">New Items</span>
          </a>
          <ul>
            <li>
              <a href="extra-icons-fontawesome.html">
                <span className="title">Icons</span>
              </a>
              <ul>
                <li>
                  <a href="extra-icons-fontawesome.html">
                    <span className="title">Font Awesome</span>
                  </a>
                </li>
                <li>
                  <a href="extra-icons-linecons.html">
                    <span className="title">Linecons</span>
                  </a>
                </li>
                <li>
                  <a href="extra-icons-elusive.html">
                    <span className="title">Elusive</span>
                  </a>
                </li>
                <li>
                  <a href="extra-icons-meteocons.html">
                    <span className="title">Meteocons</span>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="extra-maps-google.html">
                <span className="title">Maps</span>
              </a>
              <ul>
                <li>
                  <a href="extra-maps-google.html">
                    <span className="title">Google Maps</span>
                  </a>
                </li>
                <li>
                  <a href="extra-maps-advanced.html">
                    <span className="title">Advanced Map</span>
                  </a>
                </li>
                <li>
                  <a href="extra-maps-vector.html">
                    <span className="title">Vector Map</span>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="extra-members-list.html">
                <span className="title">Members</span>
                <span className="label label-warning pull-right">New</span>
              </a>
              <ul>
                <li>
                  <a href="extra-members-list.html">
                    <span className="title">Members List</span>
                  </a>
                </li>
                <li>
                  <a href="extra-members-add.html">
                    <span className="title">Add Member</span>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="extra-gallery.html">
                <span className="title">Gallery</span>
              </a>
            </li>
            <li>
              <a href="extra-calendar.html">
                <span className="title">Calendar</span>
              </a>
            </li>
            <li>
              <a href="extra-profile.html">
                <span className="title">Profile</span>
              </a>
            </li>
            <li>
              <a href="extra-login.html">
                <span className="title">Login</span>
              </a>
            </li>
            <li>
              <a href="extra-lockscreen.html">
                <span className="title">Lockscreen</span>
              </a>
            </li>
            <li>
              <a href="extra-login-light.html">
                <span className="title">Login Light</span>
              </a>
            </li>
            <li>
              <a href="extra-timeline.html">
                <span className="title">Timeline</span>
              </a>
            </li>
            <li>
              <a href="extra-timeline-center.html">
                <span className="title">Timeline Centerd</span>
              </a>
            </li>
            <li>
              <a href="extra-notes.html">
                <span className="title">Notes</span>
              </a>
            </li>
            <li>
              <a href="extra-image-crop.html">
                <span className="title">Image Crop</span>
              </a>
            </li>
            <li>
              <a href="extra-portlets.html">
                <span className="title">Portlets</span>
              </a>
            </li>
            <li>
              <a href="blank-sidebar.html">
                <span className="title">Blank Page</span>
              </a>
            </li>
            <li>
              <a href="extra-search.html">
                <span className="title">Search</span>
              </a>
            </li>
            <li>
              <a href="extra-invoice.html">
                <span className="title">Invoice</span>
              </a>
            </li>
            <li>
              <a href="extra-not-found.html">
                <span className="title">404 Page</span>
              </a>
            </li>
            <li>
              <a href="extra-tocify.html">
                <span className="title">Tocify</span>
              </a>
            </li>
            <li>
              <a href="extra-loader.html">
                <span className="title">Loading Progress</span>
              </a>
            </li>
            <li>
              <a href="extra-page-loading-ol.html">
                <span className="title">Page Loading Overlay</span>
              </a>
            </li>
            <li>
              <a href="extra-notifications.html">
                <span className="title">Notifications</span>
              </a>
            </li>
            <li>
              <a href="extra-nestable-lists.html">
                <span className="title">Nestable Lists</span>
              </a>
            </li>
            <li>
              <a href="extra-scrollable.html">
                <span className="title">Scrollable</span>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="charts-main.html">
            <i className="linecons-globe" />
            <span className="title">Charts</span>
          </a>
          <ul>
            <li>
              <a href="charts-main.html">
                <span className="title">Chart Variants</span>
              </a>
            </li>
            <li>
              <a href="charts-range.html">
                <span className="title">Range Selector</span>
              </a>
            </li>
            <li>
              <a href="charts-sparklines.html">
                <span className="title">Sparklines</span>
              </a>
            </li>
            <li>
              <a href="charts-map.html">
                <span className="title">Map Charts</span>
              </a>
            </li>
            <li>
              <a href="charts-gauges.html">
                <span className="title">Circular Gauges</span>
              </a>
            </li>
            <li>
              <a href="charts-bar-gauges.html">
                <span className="title">Bar Gauges</span>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">
            <i className="linecons-cloud" />
            <span className="title">Menu Levels</span>
          </a>
          <ul>
            <li>
              <a href="#">
                <i className="entypo-flow-line" />
                <span className="title">Menu Level 1.1</span>
              </a>
              <ul>
                <li>
                  <a href="#">
                    <i className="entypo-flow-parallel" />
                    <span className="title">Menu Level 2.1</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="entypo-flow-parallel" />
                    <span className="title">Menu Level 2.2</span>
                  </a>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="entypo-flow-cascade" />
                        <span className="title">Menu Level 3.1</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="entypo-flow-cascade" />
                        <span className="title">Menu Level 3.2</span>
                      </a>
                      <ul>
                        <li>
                          <a href="#">
                            <i className="entypo-flow-branch" />
                            <span className="title">Menu Level 4.1</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    <i className="entypo-flow-parallel" />
                    <span className="title">Menu Level 2.3</span>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">
                <i className="entypo-flow-line" />
                <span className="title">Menu Level 1.2</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="entypo-flow-line" />
                <span className="title">Menu Level 1.3</span>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div> 
</div>
);}
}
 
export default navBar;