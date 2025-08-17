<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">

<!-- <section class="footermodule-info-card"> -->
    <footer class="footer-module">
      <div class="contains">
        <!-- Newsletter Section -->
        <div class="newsletter-section">
          <p class="newsletter-text">Sign up to get new and exclusive offers to your inbox!</p>
          <input type="email" class="newsletter-input" placeholder="username@domain">
          <button class="newsletter-btn">Subscribe</button>
        </div>

        <!-- Main Footer Content -->
        <div class="footer-content">
          <!-- Contact Information -->
          <div class="contact-info">
            <p><i class="fas fa-phone"></i>{{phone}}</p>
            <p><i class="fas fa-envelope"></i>{{email}}</p>
            <p>
              <i class="fas fa-map-marker-alt"></i>
              <span>
                <b>{{addressTittle}}</b><br>
                {{addressLine1}}<br>
                {{addressLine2}}
              </span>
            </p>
            <div class="company-logo">
              <img
                src="https://www.cricket.balajiwireless.com/SSP%20Applications/NetSuite%20Inc.%20-%20SCA%202019.1/Development/img/BALAJI.png"
                alt="Balaji Logo">
            </div>
          </div>

          <!-- Footer Links -->
          <div class="footer-links">
            <div class="footer-column">
              <h5>INFORMATION</h5>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Terms & Conditions</a></li>
              </ul>
            </div>

            <div class="footer-column">
              <h5>MY ACCOUNT</h5>
              <ul>
                <li><a href="{{loginurl}}">Sign In</a></li>
                <li><a href="{{signinurl}}">Register</a></li>
                <li><a href="#">View Cart</a></li>
                <li><a href="#">My Account</a></li>
              </ul>
            </div>

            <div class="footer-column">
              <h5>SOCIAL</h5>
              <div class="social-links">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-youtube"></i></a>
              </div>
            </div>
          </div>
        </div>

        <!-- Copyright -->
        <div class="copyright">
          © Balaji Trading, Inc. - All Rights Reserved.
        </div>
      </div>
    </footer>
<!-- </section> -->

<!--   
Available helpers:
{{ getExtensionAssetsPath "img/image.jpg"}} - reference assets in your extension
{{ getExtensionAssetsPathWithDefault context_var "img/image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the extension assets folder
{{ getThemeAssetsPath context_var "img/image.jpg"}} - reference assets in the active theme
{{ getThemeAssetsPathWithDefault context_var "img/theme-image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the theme assets folder
-->