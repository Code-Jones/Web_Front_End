# Landscaping Company

Front end challenge

# Instructions
please clone or download and open index.html

## Requirements:

A landscaping company builds custom planters from clients. Create a customized page with appropriate background colours or images. Include a header that lists the company name and contact information. Your page will contain a form that prompts the user for the following:

First and last name
Address
Postal Code
Phone number
E-mail

Control the user input as follows:

Use HTML 5 inputs
All the fields must be entered
Validate the data (except address) using patterns or regular expressions. 
‘Autofocus’ must be set to the First Name


The planters are in the following shapes:

	Square/Rectangular Cubes
	Flat bottomed cylinders
	½ Spherical
	Truncated cone

The formulas for each of these shapes are:

Square/Rectangular Cubes 	V= length*width*height

Flat bottomed cylinders		 V= π*radius*radius*height

½ Spherical			V=1/2 * (4/3*π*radius*radius*radius)

Truncated cone			V=1/3*π*(radius1*radius1+radius1*radius2+radius2*radius2)*height

The dimensions entered will be in cm and the volume in cm3. The costs for each type of planter are as follows:

Square/Rectangular Cubes: 	10 cents per cm3

Flat bottomed cylinders: 		12 cents per cm3

½ Spherical: 				15 cents per cm3

Truncated cone: 	 		20 cents per cm3

Use JavaScript event handling to control the data entry for the planter type. 

Example: If a user selects a square/rectangular planter, only the dimensions for length, width and height can be entered.

Example: If the user selects the ½ spherical planters, only the radius (or diameter) can be entered.

When the user submits the form, the volume and planter cost are calculated. The information that the user entered will be displayed centred on the page below the form as follows:

Order Form

Last Name, First Name
Address
Postal Code

Type of Planter
Dimensions and Volume
Total cost
