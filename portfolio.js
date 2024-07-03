document.addEventListener("DOMContentLoaded", function() {
  let aboutButtons = document.querySelectorAll(".aboutButton");
  let aboutMePage = document.querySelector(".aboutMePage");
  
 aboutButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        console.log("About button clicked");
          if (aboutMePage.style.display === "block") {
              aboutMePage.style.display = "none";
          } else {
              aboutMePage.style.display = "block";
          }
      });
  });
  let projectsButtons = document.querySelectorAll(".projectsButton");
  let projectsPage = document.querySelector(".projectsPage");
  
  projectsButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        console.log("Projects button clicked");
          if (projectsPage.style.display === "block") {
              projectsPage.style.display = "none";
          } else {
              projectsPage.style.display = "block";
          }
      });
  });
  let aspirationsButtons = document.querySelectorAll(".aspirationsButton");
  let aspirationsPage = document.querySelector(".aspirationsPage");
  
  aspirationsButtons.forEach(function(button) {
      button.addEventListener("click", function() {
          if (aspirationsPage.style.display === "block") {
              aspirationsPage.style.display = "none";
          } else {
              aspirationsPage.style.display = "block";
          }
      });
  });
  let contactButtons = document.querySelectorAll(".contactButton");
  let contactPage = document.querySelector(".contactPage");
  
  contactButtons.forEach(function(button) {
      button.addEventListener("click", function() {
          if (contactPage.style.display === "block") {
              contactPage.style.display = "none";
          } else {
              contactPage.style.display = "block";
          }
      });
  });
  let theresMore = document.querySelector('.theresMore');
  let outsideActivities = document.querySelector('.outsideActivities');
  theresMore.addEventListener('click', function() {
      if (outsideActivities.style.display === 'block') {
          outsideActivities.style.display = 'none';
      } else {
          outsideActivities.style.display = 'block';
      }
  });
  let FTVListItem = document.querySelector('.FTVList');
  let FTVPage = document.querySelector('.FTVPage');

    // Add click event listener to the <li> element
    FTVListItem.addEventListener('click', function() {
        // Toggle the display of FTVPage
        if (FTVPage.style.display === 'block') {
            FTVPage.style.display = 'none';
        } else {
            FTVPage.style.display = 'block';
        }
      });
  let MarchingBandList = document.querySelector('.marchingBandList');
  let marchingBandPage = document.querySelector('.marchingBandPage');

    // Add click event listener to the <li> element
    MarchingBandList.addEventListener('click', function() {
        // Toggle the display of FTVPage
        if (marchingBandPage.style.display === 'block') {
           marchingBandPage.style.display = 'none';
        } else {
            marchingBandPage.style.display = 'block';
        }
      });    
  let enviroClubItem = document.querySelector('.environmentalClubList');
  let enviroPage = document.querySelector('.enviroPage');
    
        // Add click event listener to the <li> element
      enviroClubItem.addEventListener('click', function() {
            // Toggle the display of FTVPage
        if (enviroPage.style.display === 'block') {
            enviroPage.style.display = 'none';
        } else {
            enviroPage.style.display = 'block';
            }
        });
        
    let SHSItem = document.querySelector('.spanishHonorSocietyList');
    let SHSPage = document.querySelector('.SHHPage');
      
          // Add click event listener to the <li> element
      SHSItem.addEventListener('click', function() {
              // Toggle the display of FTVPage
        if (SHSPage.style.display === 'block') {
            SHSPage.style.display = 'none';
          } else {
            SHSPage.style.display = 'block';
            }
         });    
      let laxItem = document.querySelector('.laxList');
      let laxPage = document.querySelector('.laxPage');
           
               // Add click event listener to the <li> element
        laxItem.addEventListener('click', function() {
                   // Toggle the display of FTVPage
        if (laxPage.style.display === 'block') {
            laxPage.style.display = 'none';
          } else {
            laxPage.style.display = 'block';
            }
        }); 
      let chicagosItem = document.querySelector('.chicagosList');
      let chicagosPage = document.querySelector('.chicagosPage');
          
              // Add click event listener to the <li> element
       chicagosItem.addEventListener('click', function() {
                  // Toggle the display of FTVPage
        if (chicagosPage.style.display === 'block') {
                chicagosPage.style.display = 'none';
          } else {
            chicagosPage.style.display = 'block';
            }
        }); 
      let nextechItem = document.querySelector('.nextechList');
      let nextechPage = document.querySelector('.nextechPage');
          
              // Add click event listener to the <li> element
        nextechItem.addEventListener('click', function() {
                  // Toggle the display of FTVPage
          if (nextechPage.style.display === 'block') {
              nextechPage.style.display = 'none';
            } else {
              nextechPage.style.display = 'block';
              }
          }); 

        });
