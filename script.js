
        // JavaScript functions
        function showPage(pageId) {
            const pages = document.querySelectorAll('.page');
            pages.forEach(page => page.style.display = 'none');
            document.getElementById(pageId).style.display = 'block';
            window.scrollTo(0, 0);
        }

        


        // funcion to handle the slider
        function updateLabel(labelId, value) {
            document.getElementById(labelId).innerText = value;
        }

        document.addEventListener("DOMContentLoaded", function() {
            const sliders = document.querySelectorAll(".slider");

            sliders.forEach(function(slider) {
                const labels = slider.nextElementSibling.querySelectorAll(".slider-label");

                function updateLabels(value) {
                    labels.forEach(function(label) {
                        if (parseInt(label.getAttribute("data-value")) === value) {
                            label.classList.add("active");
                        } else {
                            label.classList.remove("active");
                        }
                    });
                }

                function updateSliderColor(slider, value) {
                    const percentage = ((value - slider.min) / (slider.max - slider.min)) * 100;
                    slider.style.background = `linear-gradient(to bottom, #ddd ${100 - percentage}%, #2d6d97c4 ${100 - percentage}%)`;

                }

                slider.addEventListener("input", function() {
                    const value = parseInt(this.value);
                    updateLabels(value);
                    updateSliderColor(this, value);
                });

                function handleTouchMove(e) {
                    e.preventDefault(); // Prevent scrolling
                    const touch = e.touches[0];
                    const rect = slider.getBoundingClientRect();
                    const offsetY = touch.clientY - rect.top;
                    const percentage = offsetY / rect.height;
                    const value = slider.max - Math.round((percentage) * (slider.max - slider.min)); // Update calculation to flip direction
                    slider.value = Math.max(slider.min, Math.min(slider.max, value));
                    const sliderValue = parseInt(slider.value);
                    updateLabels(sliderValue);
                    updateSliderColor(slider, sliderValue);

                    const inputEvent = new Event('input', { bubbles: true });
                    slider.dispatchEvent(inputEvent);
                }

                slider.addEventListener("touchmove", handleTouchMove);
                slider.addEventListener("touchstart", handleTouchMove);

                labels.forEach(label => {
                    label.addEventListener("touchmove", handleTouchMove);
                    label.addEventListener("touchstart", handleTouchMove);
                });

                // Initialize the correct label on load
                const initialValue = parseInt(slider.value);
                updateLabels(initialValue);
                updateSliderColor(slider, initialValue);
            });
        });



        // $(function() {
        //     $("#sortable").sortable();
        //     $("#sortable").disableSelection();
        
        //     $('#saveButton').on('click', function() {
        //         const sortedIDs = $("#sortable").sortable("toArray");
        //         $("#result").html("Sorted IDs: " + sortedIDs.join(', '));
        //         // Here you can send the sortedIDs array to your server or process it as needed
        //         console.log(sortedIDs); // For debugging purposes
        //     });
        // });
       
        document.addEventListener('DOMContentLoaded', function() {
            $("#sortable").sortable();
            $("#sortable").disableSelection();
        
            $('#saveButton').on('click', function() {
                const sortedIDs = $("#sortable").sortable("toArray");
                console.log('Sorted IDs:', sortedIDs); // For debugging purposes
                // Here you can send the sortedIDs array to your server or process it as needed
            });
        });
        


    //     // let previousPageId = null;

    //     function showPage(pageId) {
    //         // Scroll to the top of the page
    //         window.scrollTo(0, 0);

    //         // attempt to find current page
    //         const currentPage = document.querySelector('.page:not([style*="display: none"])');
    
    //         // Store the current page ID before navigating, if a current page exists
    // if (currentPage) {
    //     previousPageId = currentPage.id;
    // }


    //         // Hide all pages
    //         const pages = document.querySelectorAll('.page');
    //         pages.forEach(page => page.style.display = 'none');
    
    //         // Show the selected page
    //         document.getElementById(pageId).style.display = 'block';
    
    //         // If navigating to SectionDPage, store the previous page ID
    //         if (pageId === 'SectionDPage') {
    //             localStorage.setItem('previousPage', previousPageId);
    //         }
    //     }
    
    //     function showPreviousPage() {
    //         // Retrieve the previous page ID from local storage
    //         const previousPageId = localStorage.getItem('previousPage');
    
    //         // Show the previous page if it exists
    //         if (previousPageId) {
    //             showPage(previousPageId);
    //         }
    //     }
    
    // //     // Show the initial page (for demonstration purposes, showing personalPage by default)
    // //     showPage('SectionDPage');

    $( function() {
        $( document ).tooltip();
      } );  


// Javascript function to check whether required fields are filled before enabling the "Next" button on personalPage
document.addEventListener('DOMContentLoaded', function() {
    var ageInput = document.getElementById('ageInput');
    var genderInputs = document.querySelectorAll("input[name='gender']");
    var connectionInputs = document.querySelectorAll("input[name='connection']");
    var locationInputs = document.querySelectorAll("input[name='location']");
    var nationalityInput = document.getElementById("nationalityInput");
    var personalButton = document.getElementById("personalButton");

    function checkRequiredFieldsPersonal() {
        var ageFilled = ageInput.value.trim() !== "";
        var genderSelected = Array.from(genderInputs).some(input => input.checked);
        var connectionSelected = Array.from(connectionInputs).some(input => input.checked);
        var locationSelected = Array.from(locationInputs).some(input => input.checked);
        var nationalityFilled = nationalityInput.value.trim() !== "";

        var fields = [];
        if (!ageFilled) fields.push("Age");
        if (!genderSelected) fields.push("Gender");
        if (!connectionSelected) fields.push("Connection");
        if (!locationSelected) fields.push("Location");
        if (!nationalityFilled) fields.push("Nationality");

        if (fields.length > 0) {
            personalButton.disabled = true;
            personalButton.classList.remove('enabled');
            personalButton.style.backgroundColor = 'red';
            personalButton.title = "Please fill in " + fields.join(", ");
        } else {
            personalButton.disabled = false;
            personalButton.classList.add('enabled');
            personalButton.style.backgroundColor = 'green';
            personalButton.title = "";
        }

        // Refresh the tooltip content
        $(personalButton).tooltip("option", "content", personalButton.title);
    }

    ageInput.addEventListener("input", checkRequiredFieldsPersonal);
    genderInputs.forEach(input => input.addEventListener("change", checkRequiredFieldsPersonal));
    connectionInputs.forEach(input => input.addEventListener("change", checkRequiredFieldsPersonal));
    locationInputs.forEach(input => input.addEventListener("change", checkRequiredFieldsPersonal));
    nationalityInput.addEventListener("input", checkRequiredFieldsPersonal);

    // Initialize tooltip
    $(personalButton).tooltip();

    // Call the function initially to set the initial state of the button
    checkRequiredFieldsPersonal();
});




    // Javascript function to check whether required fields are filled before enabling the "Next" button on campusPage, and show a notification with the missing fields (liek on personalPage)


    document.addEventListener('DOMContentLoaded', function() {

        var campusVisitsInputs = document.querySelectorAll("input[name='campusVisits']");
        var activitiesInputs = document.querySelectorAll("input[name='activity']");
        var facultyInputs = document.querySelectorAll("input[name='faculty']");
        var transportInputs = document.querySelectorAll("input[name='transport']");
        // var campusExperienceInput = document.getElementById("campusExperience");

        var campusButton = document.getElementById("campusButton");

        function checkRequiredFieldsCampus() {
                
                var campusVisitsSelected = Array.from(campusVisitsInputs).some(input => input.checked);
                var activitiesSelected = Array.from(activitiesInputs).some(input => input.checked);
                var facultySelected = Array.from(facultyInputs).some(input => input.checked);
                var transportSelected = Array.from(transportInputs).some(input => input.checked);
                // var campusExperienceFilled = campusExperienceInput.value.trim() !== "";
    
                var fields = [];
                if (!campusVisitsSelected) fields.push("How often are you on campus?");
                if (!activitiesSelected) fields.push("Activities");
                if (!facultySelected) fields.push("Your faculty");
                if (!transportSelected) fields.push("Your mode of transport");
                // if (!campusExperienceFilled) fields.push("Campus Experience");
    
                if (fields.length > 0) {
                    campusButton.disabled = true;
                    campusButton.classList.remove('enabled');
                    campusButton.style.backgroundColor = 'red';
                    campusButton.title = "Please fill in " + fields.join(", ");
                } else {
                    campusButton.disabled = false;
                    campusButton.classList.add('enabled');
                    campusButton.style.backgroundColor = 'green';
                    campusButton.title = "";
                }
    
                // Refresh the tooltip content
                $(campusButton).tooltip("option", "content", campusButton.title);
            }

        campusVisitsInputs.forEach(input => input.addEventListener("change", checkRequiredFieldsCampus));
        activitiesInputs.forEach(input => input.addEventListener("change", checkRequiredFieldsCampus));
        facultyInputs.forEach(input => input.addEventListener("change", checkRequiredFieldsCampus));
        transportInputs.forEach(input => input.addEventListener("change", checkRequiredFieldsCampus));
        // campusExperienceInput.addEventListener("input", checkRequiredFieldsCampus);


        // Initialize tooltip
        $(campusButton).tooltip();

        // Call the function initially to set the initial state of the button
        checkRequiredFieldsCampus();

    });

    //check whether required fields are filled in for mapUsePage, the only required question is mcquestion puporse
    document.addEventListener('DOMContentLoaded', function() {
        var purposeInputs = document.querySelectorAll("input[name='purpose']");
        var mapUseButton = document.getElementById("mapUseButton");

        function checkRequiredFieldsMapUse() {
            var purposeSelected = Array.from(purposeInputs).some(input => input.checked);

            if (!purposeSelected) {
                mapUseButton.disabled = true;
                mapUseButton.style.backgroundColor = 'red';

            } else {
                mapUseButton.disabled = false;
                mapUseButton.style.backgroundColor = 'green';
            }
        }

        purposeInputs.forEach(input => input.addEventListener("change", checkRequiredFieldsMapUse));

        // Call the function initially to set the initial state of the button
        checkRequiredFieldsMapUse();
    });






            

//check required fields for WagPage: the only required field is the mcquestion scaleWag. show a notification saying "please rate all aspects" if the button is disabled, using tooltip
document.addEventListener('DOMContentLoaded', function() {

    var scaleWagInputs = document.querySelectorAll("input[name='scaleWag']");
    var WagButton = document.getElementById("WagButton");

    function checkRequiredFieldsWag() {
        var scaleWagSelected = false; // Check if scaleWag is selected

        // check if any scaleWag option is selected
        scaleWagInputs.forEach(function(input) {
            if (input.checked) {
                scaleWagSelected = true;
            }
        });

        // Enable or disable the "Next" button based on the required fields, and change color of button to green if all required fields are filled
        WagButton.disabled = !scaleWagSelected;
        if (WagButton.disabled) {
            WagButton.style.backgroundColor = 'red';
            WagButton.title = "Please rate all aspects";
        } else {
            WagButton.style.backgroundColor = 'green';
            WagButton.title = "";
        }

        // Refresh the tooltip content
        $(WagButton).tooltip("option", "content", WagButton.title);
    }

    // Add event listeners to required input fields
    scaleWagInputs.forEach(function(input) {
        input.addEventListener("change", checkRequiredFieldsWag);
    });

    // Initialize tooltip
    $(WagButton).tooltip();

    // Call the function initially to set the initial state of the button
    checkRequiredFieldsWag();
});




//check required fields for VUPage: the only required field is the mcquestion scaleVU. show a notification saying "please rate all aspects" if the button is disabled, using tooltip
document.addEventListener('DOMContentLoaded', function() {

    var scaleVUInputs = document.querySelectorAll("input[name='scaleVU']");
    var VUButton = document.getElementById("VUButton");

    function checkRequiredFieldsVU() {

        var scaleVUSelected = false; // Check if scaleVU is selected

        // check if any scaleVU option is selected
        scaleVUInputs.forEach(function(input) {
            if (input.checked) {
                scaleVUSelected = true;
            }
        });

        // Enable or disable the "Next" button based on the required fields, and change color of button to green if all required fields are filled
        VUButton.disabled = !scaleVUSelected;
        if (VUButton.disabled) {
            VUButton.style.backgroundColor = 'red';
            VUButton.title = "Please rate all aspects";
        }
        else {
            VUButton.style.backgroundColor = 'green';
            VUButton.title = "";
        }

        // Refresh the tooltip content
        $(VUButton).tooltip("option", "content", VUButton.title);
    }

    // Add event listeners to required input fields
    scaleVUInputs.forEach(function(input) {
        input.addEventListener("change", checkRequiredFieldsVU);
    });

    // Initialize tooltip
    $(VUButton).tooltip();

    // Call the function initially to set the initial state of the button
    checkRequiredFieldsVU();
});


//check required fields for EindhovenPage: the only required field is the mcquestion scaleEindhoven. show a notification saying "please rate all aspects" if the button is disabled, using tooltip
document.addEventListener('DOMContentLoaded', function() {

    var scaleEindhovenInputs = document.querySelectorAll("input[name='scaleEindhoven']");
    var EindhovenButton = document.getElementById("EindhovenButton");

    function checkRequiredFieldsEindhoven() {

        var scaleEindhovenSelected = false; // Check if scaleEindhoven is selected

        // check if any scaleEindhoven option is selected
        scaleEindhovenInputs.forEach(function(input) {
            if (input.checked) {
                scaleEindhovenSelected = true;
            }
        });

        // Enable or disable the "Next" button based on the required fields, and change color of button to green if all required fields are filled
        EindhovenButton.disabled = !scaleEindhovenSelected;

        if (EindhovenButton.disabled) {
            EindhovenButton.style.backgroundColor = 'red';
            EindhovenButton.title = "Please rate all aspects";
        }
        else {
            EindhovenButton.style.backgroundColor = 'green';
            EindhovenButton.title = "";
        }

        // Refresh the tooltip content
        $(EindhovenButton).tooltip("option", "content", EindhovenButton.title);
    }

    // Add event listeners to required input fields
    scaleEindhovenInputs.forEach(function(input) {
        input.addEventListener("change", checkRequiredFieldsEindhoven);
    }

    );

    // Initialize tooltip
    $(EindhovenButton).tooltip();

    // Call the function initially to set the initial state of the button
    checkRequiredFieldsEindhoven();
});

//check required fields for RotterdamPage: the only required field is the mcquestion scaleRotterdam. show a notification saying "please rate all aspects" if the button is disabled, using tooltip
document.addEventListener('DOMContentLoaded', function() {

    var scaleRotterdamInputs = document.querySelectorAll("input[name='scaleRotterdam']");
    var RotterdamButton = document.getElementById("RotterdamButton");

    function checkRequiredFieldsRotterdam() {

        var scaleRotterdamSelected = false; // Check if scaleRotterdam is selected

        // check if any scaleRotterdam option is selected
        scaleRotterdamInputs.forEach(function(input) {
            if (input.checked) {
                scaleRotterdamSelected = true;
            }
        });

        // Enable or disable the "Next" button based on the required fields, and change color of button to green if all required fields are filled
        RotterdamButton.disabled = !scaleRotterdamSelected;

        if (RotterdamButton.disabled) {
            RotterdamButton.style.backgroundColor = 'red';
            RotterdamButton.title = "Please rate all aspects";
        }
        else {
            RotterdamButton.style.backgroundColor = 'green';
            RotterdamButton.title = "";
        }

        // Refresh the tooltip content
        $(RotterdamButton).tooltip("option", "content", RotterdamButton.title);
    }

    // Add event listeners to required input fields
    scaleRotterdamInputs.forEach(function(input) {
        input.addEventListener("change", checkRequiredFieldsRotterdam);
    });

    // Initialize tooltip
    $(RotterdamButton).tooltip();

    // Call the function initially to set the initial state of the button
    checkRequiredFieldsRotterdam();
});

//check required fields for DelftPage: the only required field is the mcquestion scaleDelft. show a notification saying "please rate all aspects" if the button is disabled, using tooltip
document.addEventListener('DOMContentLoaded', function() {

    var scaleDelftInputs = document.querySelectorAll("input[name='scaleDelft']");
    var DelftButton = document.getElementById("DelftButton");

    function checkRequiredFieldsDelft() {

        var scaleDelftSelected = false; // Check if scaleDelft is selected

        // check if any scaleDelft option is selected
        scaleDelftInputs.forEach(function(input) {
            if (input.checked) {
                scaleDelftSelected = true;
            }
        });

        // Enable or disable the "Next" button based on the required fields, and change color of button to green if all required fields are filled
        DelftButton.disabled = !scaleDelftSelected;

        if (DelftButton.disabled) {
            DelftButton.style.backgroundColor = 'red';
            DelftButton.title = "Please rate all aspects";
        }
        else {

            DelftButton.style.backgroundColor = 'green';
            DelftButton.title = "";
        }

        // Refresh the tooltip content
        $(DelftButton).tooltip("option", "content", DelftButton.title);
    }

    // Add event listeners to required input fields
    scaleDelftInputs.forEach(function(input) {
        input.addEventListener("change", checkRequiredFieldsDelft);
    }
    );

    // Initialize tooltip
    $(DelftButton).tooltip();

    // Call the function initially to set the initial state of the button
    checkRequiredFieldsDelft();
});




    // check if all questions are answered on ComparePage before enabling the next button

    document.addEventListener('DOMContentLoaded', function() {
        var purposeInputs = document.querySelectorAll("input[name='purpose']");
        var saveButton = document.getElementById("saveButton");
        var compareButton = document.getElementById("compareButton");
        var saveButtonClicked = false; // Check if saveButton is clicked
    
        function checkRequiredFieldsCompare() {
            var purposeSelected = false; // Check if purpose is selected
    
            purposeInputs.forEach(function(input) {
                if (input.checked) {
                    purposeSelected = true;
                }
            });
    
            // Enable or disable the "Next" button based on the required fields
            compareButton.disabled = !(saveButtonClicked);
            if (compareButton.disabled) {
                compareButton.style.backgroundColor = 'red';
            } else {
                compareButton.style.backgroundColor = 'green';
            }
        }
    
        // Add event listeners to required input fields
        purposeInputs.forEach(function(input) {
            input.addEventListener("change", checkRequiredFieldsCompare);
        });
    
        // Add event listener for saveButton
        saveButton.addEventListener("click", function() {
            saveButtonClicked = true;
            checkRequiredFieldsCompare();
        });
    
        checkRequiredFieldsCompare();
    });
    

// change color of saveButton: first it is red and disabled, then when the order of the sortable list is changed, it turns green, and enables the button
document.addEventListener('DOMContentLoaded', function() {
    var saveButton = document.getElementById('saveButton');
    saveButton.disabled = true;
    saveButton.style.backgroundColor = 'red';

    $('#sortable').sortable({
        update: function(event, ui) {
            saveButton.disabled = false;
            saveButton.style.backgroundColor = 'green';
        }
    });
});

// saveButton turns blue when clicked
document.addEventListener('DOMContentLoaded', function() {
    var saveButton = document.getElementById('saveButton');
    saveButton.addEventListener('click', function() {
        saveButton.style.backgroundColor = 'blue';
    });
});




    








       



    // //check if al the sliders are moved to a value before enabling the next button  called WagButton. you know if the sliders are moved, if the  updateLabel function is called

    // document.addEventListener('DOMContentLoaded', function() {

    //     var slider_layout_Wag = document.getElementById('slider_layout_Wag');
    //     var slider_3D_clarity_Wag = document.getElementById('slider_3D_clarity_Wag');
    //     var slider_info_Wag = document.getElementById('slider_info_Wag');
    //     var slider_legend_completeness_Wag = document.getElementById('slider_legend_completeness_Wag');
    //     var slider_legend_clarity_Wag = document.getElementById('slider_legend_clarity_Wag');
    //     var slider_text_clarity_Wag = document.getElementById('slider_text_clarity_Wag');
    //     var slider_text_visualization_Wag = document.getElementById('slider_text_visualization_Wag');
    //     var slider_color_clarity_Wag = document.getElementById('slider_color_clarity_Wag');
    //     var slider_color_meaning_Wag = document.getElementById('slider_color_meaning_Wag');
    //     var slider_symbols_clarity_Wag = document.getElementById('slider_symbols_clarity_Wag');
    //     var slider_symbols_meaning_Wag = document.getElementById('slider_symbols_meaning_Wag');

    //     function checkRequiredFieldsWag() {

    //         var slider_layout_WagSelected = false; // Check if slider_layout_Wag is selected
    //         var slider_3D_clarity_WagSelected = false; // Check if slider_3D_clarity_Wag is selected
    //         var slider_info_WagSelected = false; // Check if slider_info_Wag is selected
    //         var slider_legend_completeness_WagSelected = false; // Check if slider_legend_completeness_Wag is selected
    //         var slider_legend_clarity_WagSelected = false; // Check if slider_legend_clarity_Wag is selected
    //         var slider_text_clarity_WagSelected = false; // Check if slider_text_clarity_Wag is selected
    //         var slider_text_visualization_WagSelected = false; // Check if slider_text_visualization_Wag is selected
    //         var slider_color_clarity_WagSelected = false; // Check if slider_color_clarity_Wag is selected
    //         var slider_color_meaning_WagSelected = false; // Check if slider_color_meaning_Wag is selected
    //         var slider_symbols_clarity_WagSelected = false; // Check if slider_symbols_clarity_Wag is selected
    //         var slider_symbols_meaning_WagSelected = false; // Check if slider_symbols_meaning_Wag is selected

    //         // check if all sliders are moved by checking, if the update label function is called for each slider, not by checking if the value of the slider is not 0
    //         if (slider_layout_Wag.classList.contains('active')) {
    //             slider_layout_WagSelected = true;
    //         }

    //         if (slider_3D_clarity_Wag.classList.contains('active')) {
    //             slider_3D_clarity_WagSelected = true;
    //         }

    //         if (slider_info_Wag.classList.contains('active')) {
    //             slider_info_WagSelected = true;
    //         }



    //         // Enable or disable the "Next" button based on the required fields, and change color of button to green if all required fields are filled
    //         var WagButton = document.getElementById("WagButton");
    //         WagButton.disabled = !(slider_layout_WagSelected && slider_3D_clarity_WagSelected && slider_info_WagSelected && slider_legend_completeness_WagSelected && slider_legend_clarity_WagSelected && slider_text_clarity_WagSelected && slider_text_visualization_WagSelected && slider_color_clarity_WagSelected && slider_color_meaning_WagSelected && slider_symbols_clarity_WagSelected && slider_symbols_meaning_WagSelected);
    //         if (WagButton.disabled) {

    //             WagButton.style.backgroundColor = 'red';

    //         } else {
    //             WagButton.style.backgroundColor = 'green';

    //         }

    //     }

    //     // Add event listeners to required input fields
    //     slider_layout_Wag.addEventListener("input", checkRequiredFieldsWag);
    //     slider_3D_clarity_Wag.addEventListener("input", checkRequiredFieldsWag);
    //     slider_info_Wag.addEventListener("input", checkRequiredFieldsWag);
    //     slider_legend_completeness_Wag.addEventListener("input", checkRequiredFieldsWag);
    //     slider_legend_clarity_Wag.addEventListener("input", checkRequiredFieldsWag);
    //     slider_text_clarity_Wag.addEventListener("input", checkRequiredFieldsWag);
    //     slider_text_visualization_Wag.addEventListener("input", checkRequiredFieldsWag);
    //     slider_color_clarity_Wag.addEventListener("input", checkRequiredFieldsWag);
    //     slider_color_meaning_Wag.addEventListener("input", checkRequiredFieldsWag);
    //     slider_symbols_clarity_Wag.addEventListener("input", checkRequiredFieldsWag);
    //     slider_symbols_meaning_Wag.addEventListener("input", checkRequiredFieldsWag);

    //     // Call the function initially to set the initial state of the button
    //     checkRequiredFieldsWag();
    // });
    







        



        
// JavaScript function to submit the survey
function collectResponses() {
    let responses = {};

        //collect email address on the intro page
const emailInput = document.getElementById('emailInput');
if (emailInput) responses.email = emailInput.value;

    // Section A responses
    const ageInput = document.getElementById('ageInput');
    if (ageInput) responses.age = ageInput.value;

    // collect gender response, if "other" is selected, also collect the input of the text field
    const gender = document.querySelector('input[name="gender"]:checked');

    if (gender) { 
        responses.gender = gender.value;

    //check if the 'other' option is selected
    if (gender.value === 'other') {
        const otherGenderInput = document.getElementById('otherGenderInput');
        if (otherGenderInput && otherGenderInput.value.trim() !== '') {
            responses.gender = otherGenderInput.value;
        }
    }
} 


    const connection = document.querySelector('input[name="connection"]:checked');
    if (connection) responses.connection = connection.value;

    if (connection.value === 'other') {
        const otherConnectionInput = document.getElementById('otherConnectionInput');
        if (otherConnectionInput && otherConnectionInput.value.trim() !== '') {
            responses.connection = otherConnectionInput.value;
        }
    }

    const location = document.querySelector('input[name="location"]:checked');
    if (location) responses.location = location.value;

    if (location.value === 'other') {
        const otherLocationInput = document.getElementById('otherLocationInput');
        if (otherLocationInput && otherLocationInput.value.trim() !== '') {
            responses.location = otherLocationInput.value;
        }
    }   

    const nationalityInput = document.getElementById('nationalityInput');
    if (nationalityInput) responses.nationality = nationalityInput.value;

    // Section B responses
    const campusVisits = document.querySelector('input[name="campusVisits"]:checked');
    if (campusVisits) responses.campusVisits = campusVisits.value;

    if (campusVisits.value === 'other') {
        const otherCampusVisitsInput = document.getElementById('otherCampusVisitsInput');
        if (otherCampusVisitsInput && otherCampusVisitsInput.value.trim() !== '') {
            responses.campusVisits = otherCampusVisitsInput.value;
        }
    }


    const checkedActivities = Array.from(document.querySelectorAll('input[name="activity"]:checked'));

    responses.activities = checkedActivities.map(activity => activity.value);

    if (checkedActivities.map(activity => activity.value).includes('other')) {
        const otherActivityInput = document.getElementById('otherActivityInput');
        if (otherActivityInput && otherActivityInput.value.trim() !== '') {
            responses.activities.push(otherActivityInput.value);
        }
    }




    const faculty = document.querySelector('input[name="faculty"]:checked');
    if (faculty) responses.faculty = faculty.value
    
    if (faculty.value === 'other') {
        const otherFacultyInput = document.getElementById('otherFacultyInput');
        if (otherFacultyInput && otherFacultyInput.value.trim() !== '') {
            responses.faculty = otherFacultyInput.value;
        }
    };

    const transport = document.querySelector('input[name="transport"]:checked');
    if (transport) responses.transport = transport.value;

    if (transport.value === 'other') {
        const otherTransportInput = document.getElementById('otherTransportInput');
        if (otherTransportInput && otherTransportInput.value.trim() !== '') {
            responses.transport = otherTransportInput.value;
        }
    }


    const campusExperience = document.getElementById('campusExperience');
    if (campusExperience) responses.campusExperience = campusExperience.value;


    // collect resonses mapUsePage
    const purpose = document.querySelector('input[name="purpose"]:checked');
    if (purpose) responses.purpose = purpose.value;


        // section C responses: Delft
const slider_familiarity_Delft = document.getElementById('slider_familiarity_Delft');
if (slider_familiarity_Delft) responses.slider_familiarity_Delft = slider_familiarity_Delft.value;

const slider_layout_Delft = document.getElementById('slider_layout_Delft');
if (slider_layout_Delft) responses.slider_layout_Delft = slider_layout_Delft.value;

// collect text from id layout_Delft
const layout_Delft = document.getElementById('layout_Delft');
if (layout_Delft) responses.layout_Delft = layout_Delft.value;

const slider_3D_clarity_Delft = document.getElementById('slider_3D_clarity_Delft');
if (slider_3D_clarity_Delft) responses.slider_3D_clarity_Delft = slider_3D_clarity_Delft.value;

const threeD_clarity_Delft = document.getElementById('threeD_clarity_Delft');
if (threeD_clarity_Delft) responses.threeD_clarity_Delft = threeD_clarity_Delft.value;

const slider_info_Delft = document.getElementById('slider_info_Delft');
if (slider_info_Delft) responses.slider_info_Delft = slider_info_Delft.value;

const info_Delft = document.getElementById('info_Delft');
if (info_Delft) responses.info_Delft = info_Delft.value;

// check multiple choice question id scaleDelft
const scaleDelft = document.querySelector('input[name="scaleDelft"]:checked');
if (scaleDelft) responses.scaleDelft = scaleDelft.value;

const slider_legend_completeness_Delft = document.getElementById('slider_legend_completeness_Delft');
if (slider_legend_completeness_Delft) responses.slider_legend_completeness_Delft = slider_legend_completeness_Delft.value;

const legend_clarity_Delft = document.getElementById('legend_clarity_Delft');
if (legend_clarity_Delft) responses.legend_clarity_Delft = legend_clarity_Delft.value;

const slider_legend_clarity_Delft = document.getElementById('slider_legend_clarity_Delft');
if (slider_legend_clarity_Delft) responses.slider_legend_clarity_Delft = slider_legend_clarity_Delft.value;

const legend_content_Delft = document.getElementById('legend_content_Delft');
if (legend_content_Delft) responses.legend_content_Delft = legend_content_Delft.value;

const slider_text_clarity_Delft = document.getElementById('slider_text_clarity_Delft');
if (slider_text_clarity_Delft) responses.slider_text_clarity_Delft = slider_text_clarity_Delft.value;

const text_clarity_Delft = document.getElementById('text_clarity_Delft');
if (text_clarity_Delft) responses.text_clarity_Delft = text_clarity_Delft.value;

const slider_text_visualization_Delft = document.getElementById('slider_text_visualization_Delft');
if (slider_text_visualization_Delft) responses.slider_text_visualization_Delft = slider_text_visualization_Delft.value;

const text_visualization_Delft = document.getElementById('text_visualization_Delft');
if (text_visualization_Delft) responses.text_visualization_Delft = text_visualization_Delft.value;

const slider_color_clarity_Delft = document.getElementById('slider_color_clarity_Delft');
if (slider_color_clarity_Delft) responses.slider_color_clarity_Delft = slider_color_clarity_Delft.value;

const color_clarity_Delft = document.getElementById('color_clarity_Delft');
if (color_clarity_Delft) responses.color_clarity_Delft = color_clarity_Delft.value;

const slider_color_meaning_Delft = document.getElementById('slider_color_meaning_Delft');
if (slider_color_meaning_Delft) responses.slider_color_meaning_Delft = slider_color_meaning_Delft.value;

const color_meaning_Delft = document.getElementById('color_meaning_Delft');
if (color_meaning_Delft) responses.color_meaning_Delft = color_meaning_Delft.value;

const slider_symbols_clarity_Delft = document.getElementById('slider_symbols_clarity_Delft');
if (slider_symbols_clarity_Delft) responses.slider_symbols_clarity_Delft = slider_symbols_clarity_Delft.value;

const symbols_clarity_Delft = document.getElementById('symbols_clarity_Delft');
if (symbols_clarity_Delft) responses.symbols_clarity_Delft = symbols_clarity_Delft.value;

const slider_symbols_meaning_Delft = document.getElementById('slider_symbols_meaning_Delft');
if (slider_symbols_meaning_Delft) responses.slider_symbols_meaning_Delft = slider_symbols_meaning_Delft.value;

const symbols_meaning_Delft = document.getElementById('symbols_meaning_Delft');
if (symbols_meaning_Delft) responses.symbols_meaning_Delft = symbols_meaning_Delft.value;

    

// section C responses: Wageningen
const slider_layout_Wag = document.getElementById('slider_layout_Wag');
if (slider_layout_Wag) responses.slider_layout_Wag = slider_layout_Wag.value;

// collect text from id layout_Wag
const layout_Wag = document.getElementById('layout_Wag');
if (layout_Wag) responses.layout_Wag = layout_Wag.value;

const slider_3D_clarity_Wag = document.getElementById('slider_3D_clarity_Wag');
if (slider_3D_clarity_Wag) responses.slider_3D_clarity_Wag = slider_3D_clarity_Wag.value;

const threeD_clarity_Wag = document.getElementById('threeD_clarity_Wag');
if (threeD_clarity_Wag) responses.threeD_clarity_Wag = threeD_clarity_Wag.value;

const slider_info_Wag = document.getElementById('slider_info_Wag');
if (slider_info_Wag) responses.slider_info_Wag = slider_info_Wag.value;

const info_wag = document.getElementById('info_wag');
if (info_wag) responses.info_wag = info_wag.value;

// check multiple choice question id scaleWag
const scaleWag = document.querySelector('input[name="scaleWag"]:checked');
if (scaleWag) responses.scaleWag = scaleWag.value;

const slider_legend_completeness_Wag = document.getElementById('slider_legend_completeness_Wag');
if (slider_legend_completeness_Wag) responses.slider_legend_completeness_Wag = slider_legend_completeness_Wag.value;

const legend_clarity_Wag = document.getElementById('legend_clarity_Wag');
if (legend_clarity_Wag) responses.legend_clarity_Wag = legend_clarity_Wag.value;

const slider_legend_clarity_Wag = document.getElementById('slider_legend_clarity_Wag');
if (slider_legend_clarity_Wag) responses.slider_legend_clarity_Wag = slider_legend_clarity_Wag.value;

const legend_content_Wag = document.getElementById('legend_content_Wag');
if (legend_content_Wag) responses.legend_content_Wag = legend_content_Wag.value;

const slider_text_clarity_Wag = document.getElementById('slider_text_clarity_Wag');
if (slider_text_clarity_Wag) responses.slider_text_clarity_Wag = slider_text_clarity_Wag.value;

const text_clarity_Wag = document.getElementById('text_clarity_Wag');
if (text_clarity_Wag) responses.text_clarity_Wag = text_clarity_Wag.value;

const slider_text_visualization_Wag = document.getElementById('slider_text_visualization_Wag');
if (slider_text_visualization_Wag) responses.slider_text_visualization_Wag = slider_text_visualization_Wag.value;

const text_visualization_Wag = document.getElementById('text_visualization_Wag');
if (text_visualization_Wag) responses.text_visualization_Wag = text_visualization_Wag.value;

const slider_color_clarity_Wag = document.getElementById('slider_color_clarity_Wag');
if (slider_color_clarity_Wag) responses.slider_color_clarity_Wag = slider_color_clarity_Wag.value;

const color_clarity_Wag = document.getElementById('color_clarity_Wag');
if (color_clarity_Wag) responses.color_clarity_Wag = color_clarity_Wag.value;

const slider_color_meaning_Wag = document.getElementById('slider_color_meaning_Wag');
if (slider_color_meaning_Wag) responses.slider_color_meaning_Wag = slider_color_meaning_Wag.value;

const color_meaning_Wag = document.getElementById('color_meaning_Wag');
if (color_meaning_Wag) responses.color_meaning_Wag = color_meaning_Wag.value;

const slider_symbols_clarity_Wag = document.getElementById('slider_symbols_clarity_Wag');
if (slider_symbols_clarity_Wag) responses.slider_symbols_clarity_Wag = slider_symbols_clarity_Wag.value;

const symbols_clarity_Wag = document.getElementById('symbols_clarity_Wag');
if (symbols_clarity_Wag) responses.symbols_clarity_Wag = symbols_clarity_Wag.value;

const slider_symbols_meaning_Wag = document.getElementById('slider_symbols_meaning_Wag');
if (slider_symbols_meaning_Wag) responses.slider_symbols_meaning_Wag = slider_symbols_meaning_Wag.value;

const symbols_meaning_Wag = document.getElementById('symbols_meaning_Wag');
if (symbols_meaning_Wag) responses.symbols_meaning_Wag = symbols_meaning_Wag.value;

// collect answers from page VU


// section C responses: VU
const slider_layout_VU = document.getElementById('slider_layout_VU');
if (slider_layout_VU) responses.slider_layout_VU = slider_layout_VU.value;

// collect text from id layout_VU
const layout_VU = document.getElementById('layout_VU');
if (layout_VU) responses.layout_VU = layout_VU.value;

const slider_3D_clarity_VU = document.getElementById('slider_3D_clarity_VU');
if (slider_3D_clarity_VU) responses.slider_3D_clarity_VU = slider_3D_clarity_VU.value;

const threeD_clarity_VU = document.getElementById('threeD_clarity_VU');
if (threeD_clarity_VU) responses.threeD_clarity_VU = threeD_clarity_VU.value;

const slider_info_VU = document.getElementById('slider_info_VU');
if (slider_info_VU) responses.slider_info_VU = slider_info_VU.value;

const info_VU = document.getElementById('info_VU');
if (info_VU) responses.info_VU = info_VU.value;

// check multiple choice question id scaleVU
const scaleVU = document.querySelector('input[name="scaleVU"]:checked');
if (scaleVU) responses.scaleVU = scaleVU.value;

const slider_legend_completeness_VU = document.getElementById('slider_legend_completeness_VU');
if (slider_legend_completeness_VU) responses.slider_legend_completeness_VU = slider_legend_completeness_VU.value;

const legend_clarity_VU = document.getElementById('legend_clarity_VU');
if (legend_clarity_VU) responses.legend_clarity_VU = legend_clarity_VU.value;

const slider_legend_clarity_VU = document.getElementById('slider_legend_clarity_VU');
if (slider_legend_clarity_VU) responses.slider_legend_clarity_VU = slider_legend_clarity_VU.value;

const legend_content_VU = document.getElementById('legend_content_VU');
if (legend_content_VU) responses.legend_content_VU = legend_content_VU.value;

const slider_text_clarity_VU = document.getElementById('slider_text_clarity_VU');
if (slider_text_clarity_VU) responses.slider_text_clarity_VU = slider_text_clarity_VU.value;

const text_clarity_VU = document.getElementById('text_clarity_VU');
if (text_clarity_VU) responses.text_clarity_VU = text_clarity_VU.value;

const slider_text_visualization_VU = document.getElementById('slider_text_visualization_VU');
if (slider_text_visualization_VU) responses.slider_text_visualization_VU = slider_text_visualization_VU.value;

const text_visualization_VU = document.getElementById('text_visualization_VU');
if (text_visualization_VU) responses.text_visualization_VU = text_visualization_VU.value;

const slider_color_clarity_VU = document.getElementById('slider_color_clarity_VU');
if (slider_color_clarity_VU) responses.slider_color_clarity_VU = slider_color_clarity_VU.value;

const color_clarity_VU = document.getElementById('color_clarity_VU');
if (color_clarity_VU) responses.color_clarity_VU = color_clarity_VU.value;

const slider_color_meaning_VU = document.getElementById('slider_color_meaning_VU');
if (slider_color_meaning_VU) responses.slider_color_meaning_VU = slider_color_meaning_VU.value;

const color_meaning_VU = document.getElementById('color_meaning_VU');
if (color_meaning_VU) responses.color_meaning_VU = color_meaning_VU.value;

const slider_symbols_clarity_VU = document.getElementById('slider_symbols_clarity_VU');
if (slider_symbols_clarity_VU) responses.slider_symbols_clarity_VU = slider_symbols_clarity_VU.value;

const symbols_clarity_VU = document.getElementById('symbols_clarity_VU');
if (symbols_clarity_VU) responses.symbols_clarity_VU = symbols_clarity_VU.value;

const slider_symbols_meaning_VU = document.getElementById('slider_symbols_meaning_VU');
if (slider_symbols_meaning_VU) responses.slider_symbols_meaning_VU = slider_symbols_meaning_VU.value;

const symbols_meaning_VU = document.getElementById('symbols_meaning_VU');
if (symbols_meaning_VU) responses.symbols_meaning_VU = symbols_meaning_VU.value;

// section C responses: Eindhoven
const slider_layout_Eindhoven = document.getElementById('slider_layout_Eindhoven');
if (slider_layout_Eindhoven) responses.slider_layout_Eindhoven = slider_layout_Eindhoven.value;

// collect text from id layout_Eindhoven
const layout_Eindhoven = document.getElementById('layout_Eindhoven');
if (layout_Eindhoven) responses.layout_Eindhoven = layout_Eindhoven.value;

const slider_3D_clarity_Eindhoven = document.getElementById('slider_3D_clarity_Eindhoven');
if (slider_3D_clarity_Eindhoven) responses.slider_3D_clarity_Eindhoven = slider_3D_clarity_Eindhoven.value;

const threeD_clarity_Eindhoven = document.getElementById('threeD_clarity_Eindhoven');
if (threeD_clarity_Eindhoven) responses.threeD_clarity_Eindhoven = threeD_clarity_Eindhoven.value;

const slider_info_Eindhoven = document.getElementById('slider_info_Eindhoven');
if (slider_info_Eindhoven) responses.slider_info_Eindhoven = slider_info_Eindhoven.value;

const info_Eindhoven = document.getElementById('info_Eindhoven');
if (info_Eindhoven) responses.info_Eindhoven = info_Eindhoven.value;

// check multiple choice question id scaleEindhoven
const scaleEindhoven = document.querySelector('input[name="scaleEindhoven"]:checked');
if (scaleEindhoven) responses.scaleEindhoven = scaleEindhoven.value;

const slider_legend_completeness_Eindhoven = document.getElementById('slider_legend_completeness_Eindhoven');
if (slider_legend_completeness_Eindhoven) responses.slider_legend_completeness_Eindhoven = slider_legend_completeness_Eindhoven.value;

const legend_clarity_Eindhoven = document.getElementById('legend_clarity_Eindhoven');
if (legend_clarity_Eindhoven) responses.legend_clarity_Eindhoven = legend_clarity_Eindhoven.value;

const slider_legend_clarity_Eindhoven = document.getElementById('slider_legend_clarity_Eindhoven');
if (slider_legend_clarity_Eindhoven) responses.slider_legend_clarity_Eindhoven = slider_legend_clarity_Eindhoven.value;

const legend_content_Eindhoven = document.getElementById('legend_content_Eindhoven');
if (legend_content_Eindhoven) responses.legend_content_Eindhoven = legend_content_Eindhoven.value;

const slider_text_clarity_Eindhoven = document.getElementById('slider_text_clarity_Eindhoven');
if (slider_text_clarity_Eindhoven) responses.slider_text_clarity_Eindhoven = slider_text_clarity_Eindhoven.value;

const text_clarity_Eindhoven = document.getElementById('text_clarity_Eindhoven');
if (text_clarity_Eindhoven) responses.text_clarity_Eindhoven = text_clarity_Eindhoven.value;

const slider_text_visualization_Eindhoven = document.getElementById('slider_text_visualization_Eindhoven');
if (slider_text_visualization_Eindhoven) responses.slider_text_visualization_Eindhoven = slider_text_visualization_Eindhoven.value;

const text_visualization_Eindhoven = document.getElementById('text_visualization_Eindhoven');
if (text_visualization_Eindhoven) responses.text_visualization_Eindhoven = text_visualization_Eindhoven.value;

const slider_color_clarity_Eindhoven = document.getElementById('slider_color_clarity_Eindhoven');
if (slider_color_clarity_Eindhoven) responses.slider_color_clarity_Eindhoven = slider_color_clarity_Eindhoven.value;

const color_clarity_Eindhoven = document.getElementById('color_clarity_Eindhoven');
if (color_clarity_Eindhoven) responses.color_clarity_Eindhoven = color_clarity_Eindhoven.value;

const slider_color_meaning_Eindhoven = document.getElementById('slider_color_meaning_Eindhoven');
if (slider_color_meaning_Eindhoven) responses.slider_color_meaning_Eindhoven = slider_color_meaning_Eindhoven.value;

const color_meaning_Eindhoven = document.getElementById('color_meaning_Eindhoven');
if (color_meaning_Eindhoven) responses.color_meaning_Eindhoven = color_meaning_Eindhoven.value;

const slider_symbols_clarity_Eindhoven = document.getElementById('slider_symbols_clarity_Eindhoven');
if (slider_symbols_clarity_Eindhoven) responses.slider_symbols_clarity_Eindhoven = slider_symbols_clarity_Eindhoven.value;

const symbols_clarity_Eindhoven = document.getElementById('symbols_clarity_Eindhoven');
if (symbols_clarity_Eindhoven) responses.symbols_clarity_Eindhoven = symbols_clarity_Eindhoven.value;

const slider_symbols_meaning_Eindhoven = document.getElementById('slider_symbols_meaning_Eindhoven');
if (slider_symbols_meaning_Eindhoven) responses.slider_symbols_meaning_Eindhoven = slider_symbols_meaning_Eindhoven.value;

const symbols_meaning_Eindhoven = document.getElementById('symbols_meaning_Eindhoven');
if (symbols_meaning_Eindhoven) responses.symbols_meaning_Eindhoven = symbols_meaning_Eindhoven.value;

// section C responses: Rotterdam
const slider_layout_Rotterdam = document.getElementById('slider_layout_Rotterdam');
if (slider_layout_Rotterdam) responses.slider_layout_Rotterdam = slider_layout_Rotterdam.value;

// collect text from id layout_Rotterdam
const layout_Rotterdam = document.getElementById('layout_Rotterdam');
if (layout_Rotterdam) responses.layout_Rotterdam = layout_Rotterdam.value;

const slider_3D_clarity_Rotterdam = document.getElementById('slider_3D_clarity_Rotterdam');
if (slider_3D_clarity_Rotterdam) responses.slider_3D_clarity_Rotterdam = slider_3D_clarity_Rotterdam.value;

const threeD_clarity_Rotterdam = document.getElementById('threeD_clarity_Rotterdam');
if (threeD_clarity_Rotterdam) responses.threeD_clarity_Rotterdam = threeD_clarity_Rotterdam.value;

const slider_info_Rotterdam = document.getElementById('slider_info_Rotterdam');
if (slider_info_Rotterdam) responses.slider_info_Rotterdam = slider_info_Rotterdam.value;

const info_Rotterdam = document.getElementById('info_Rotterdam');
if (info_Rotterdam) responses.info_Rotterdam = info_Rotterdam.value;

// check multiple choice question id scaleRotterdam
const scaleRotterdam = document.querySelector('input[name="scaleRotterdam"]:checked');
if (scaleRotterdam) responses.scaleRotterdam = scaleRotterdam.value;

const slider_legend_completeness_Rotterdam = document.getElementById('slider_legend_completeness_Rotterdam');
if (slider_legend_completeness_Rotterdam) responses.slider_legend_completeness_Rotterdam = slider_legend_completeness_Rotterdam.value;

const legend_clarity_Rotterdam = document.getElementById('legend_clarity_Rotterdam');
if (legend_clarity_Rotterdam) responses.legend_clarity_Rotterdam = legend_clarity_Rotterdam.value;

const slider_legend_clarity_Rotterdam = document.getElementById('slider_legend_clarity_Rotterdam');
if (slider_legend_clarity_Rotterdam) responses.slider_legend_clarity_Rotterdam = slider_legend_clarity_Rotterdam.value;

const legend_content_Rotterdam = document.getElementById('legend_content_Rotterdam');
if (legend_content_Rotterdam) responses.legend_content_Rotterdam = legend_content_Rotterdam.value;

const slider_text_clarity_Rotterdam = document.getElementById('slider_text_clarity_Rotterdam');
if (slider_text_clarity_Rotterdam) responses.slider_text_clarity_Rotterdam = slider_text_clarity_Rotterdam.value;

const text_clarity_Rotterdam = document.getElementById('text_clarity_Rotterdam');
if (text_clarity_Rotterdam) responses.text_clarity_Rotterdam = text_clarity_Rotterdam.value;

const slider_text_visualization_Rotterdam = document.getElementById('slider_text_visualization_Rotterdam');
if (slider_text_visualization_Rotterdam) responses.slider_text_visualization_Rotterdam = slider_text_visualization_Rotterdam.value;

const text_visualization_Rotterdam = document.getElementById('text_visualization_Rotterdam');
if (text_visualization_Rotterdam) responses.text_visualization_Rotterdam = text_visualization_Rotterdam.value;

const slider_color_clarity_Rotterdam = document.getElementById('slider_color_clarity_Rotterdam');
if (slider_color_clarity_Rotterdam) responses.slider_color_clarity_Rotterdam = slider_color_clarity_Rotterdam.value;

const color_clarity_Rotterdam = document.getElementById('color_clarity_Rotterdam');
if (color_clarity_Rotterdam) responses.color_clarity_Rotterdam = color_clarity_Rotterdam.value;

const slider_color_meaning_Rotterdam = document.getElementById('slider_color_meaning_Rotterdam');
if (slider_color_meaning_Rotterdam) responses.slider_color_meaning_Rotterdam = slider_color_meaning_Rotterdam.value;

const color_meaning_Rotterdam = document.getElementById('color_meaning_Rotterdam');
if (color_meaning_Rotterdam) responses.color_meaning_Rotterdam = color_meaning_Rotterdam.value;

const slider_symbols_clarity_Rotterdam = document.getElementById('slider_symbols_clarity_Rotterdam');
if (slider_symbols_clarity_Rotterdam) responses.slider_symbols_clarity_Rotterdam = slider_symbols_clarity_Rotterdam.value;

const symbols_clarity_Rotterdam = document.getElementById('symbols_clarity_Rotterdam');
if (symbols_clarity_Rotterdam) responses.symbols_clarity_Rotterdam = symbols_clarity_Rotterdam.value;

const slider_symbols_meaning_Rotterdam = document.getElementById('slider_symbols_meaning_Rotterdam');
if (slider_symbols_meaning_Rotterdam) responses.slider_symbols_meaning_Rotterdam = slider_symbols_meaning_Rotterdam.value;

const symbols_meaning_Rotterdam = document.getElementById('symbols_meaning_Rotterdam');
if (symbols_meaning_Rotterdam) responses.symbols_meaning_Rotterdam = symbols_meaning_Rotterdam.value;



// collect the "result" from sortable, which is an array of the id's of the items in the sortable list, called sortedIDs
const sortedIDs = $("#sortable").sortable("toArray");
if (sortedIDs) responses.sortedIDs = sortedIDs;

        // collect explanation for sorting 
        const ranking = document.getElementById('ranking');
        if (ranking) responses.ranking = ranking;
        












    return responses;

}

function submitSurvey() {
    const responses = collectResponses();
    const emailParams = {
        to_name: "Josephine Spit",
        from_name: "Survey System",
        message: JSON.stringify(responses, null, 2)
    };

    emailjs.send('service_54xirq9', 'template_6a0qubb', emailParams) // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your actual values
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Survey submitted successfully! You can now close the page.');
        }, function(error) {
            console.log('FAILED...', error);
            alert('Failed to submit the survey. Please try again.');
        });
}

document.addEventListener('DOMContentLoaded', function() {
    const smallImages = document.querySelectorAll('.small-image');

    smallImages.forEach(function(smallImage) {
        smallImage.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const enlargedImageContainer2 = document.getElementById(targetId);
            if (!enlargedImageContainer2) {
                console.error('No element found with ID:', targetId);
                return;
            }
            const enlargedImage = enlargedImageContainer2.querySelector('img');

            if (!enlargedImage) {
                console.error('No image found in the enlarged image container with ID:', targetId);
                return;
            }

            // Set the source of the enlarged image to match the small image
            enlargedImage.src = this.src;

            // Show the enlarged image container and start the transition
            enlargedImageContainer2.style.display = 'block';
            setTimeout(() => {
                enlargedImageContainer2.style.opacity = '1';
                enlargedImageContainer2.style.transform = 'translate(-50%, -50%) scale(1)';
            }, 10); // Slight delay to allow display change to be registered

            // Add a click event listener to the enlarged image container to hide it
            sidebar.addEventListener('click', function() {
                // Start the transition to hide the enlarged image container
                enlargedImageContainer2.style.opacity = '0';
                enlargedImageContainer2.style.transform = 'translate(-50%, -50%) scale(0.9)';
                setTimeout(() => {
                    enlargedImageContainer2.style.display = 'none';
                }, 300); // Match this delay with the CSS transition duration
            });
        });
    });
});





// Function to handle image enlargement
document.addEventListener('DOMContentLoaded', function () {
    var images = document.querySelectorAll('.enlarge'); // Select all images with class 'enlarge'
    images.forEach(function (image) {
        if (!image.hasAttribute('data-enlarge-listener')) {
            image.setAttribute('data-enlarge-listener', 'true'); // Mark the image to indicate that the listener is attached
            image.addEventListener('click', function () {
                console.log('Image clicked');

                var originalImage = this; // Reference to the clicked original image

                var enlargedImageSrc = this.src; // Get the source of the clicked image

                // Create an image element for the enlarged image
                var enlargedImage = document.createElement('img');
                enlargedImage.classList.add('enlarged-image'); // Add class to the enlarged image
                enlargedImage.src = enlargedImageSrc; // Set the source of the enlarged image
                enlargedImage.alt = this.alt; // Set the alt attribute of the enlarged image

                // log to verify image creation
                console.log('Enlarged image created', enlargedImageSrc);

                // Hide the original image
                originalImage.style.display = 'none';

                // Append the enlarged image after the original image
                originalImage.insertAdjacentElement('afterend', enlargedImage);

                // Add event listener to remove the enlarged image when clicked
                enlargedImage.addEventListener('click', function () {
                    // Show the original image again
                    originalImage.style.display = 'block';

                    // Remove the enlarged image
                    enlargedImage.remove();
                });
            });
        }
    });
});



