// Description: This file contains the JavaScript code for the website to create a copyright year option.
function createFooter() {
  const footer = document.createElement("footer");
  footer.innerHTML = `
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center text-capitalize">
                    <div  id="copyrightYear" style="background-color:rgb(112, 109, 109)">
                        <p> Copyright © ${new Date().getFullYear()} MISHUK</p>
                    </div>
                </div>
            </div>
        </div>`;
  document.body.appendChild(footer);
}
createFooter();
function footer() {
 const copyrightFooter = `<p> Copyright © ${new Date().getFullYear()} MISHUK</p>`;
 document.getElementById("copyrightYear").innerHTML = copyrightFooter;
}
footer();

