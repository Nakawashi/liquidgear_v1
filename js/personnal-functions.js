/*
Author: Lucie Genevey
Date: 2016.01.18
Summary: JavaScript for the shop part
*/

function styleConfigElement(clicked) {
    
    switch (clicked) {
        case 'configS':
        /* les éléments non sélectionnés n'ont plus de box shadow */
        document.getElementById('configM').style.boxShadow = "none";
        document.getElementById('configL').style.boxShadow = "none";
        /* quand on clique sur la config S, boxshadow autour*/
        document.getElementById(clicked).style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
            
        /* set valeur champ hidden correspondant au type de configuration selectionnee */
		document.getElementById('hiddenConfig').value = "config S";
		break;
            
        case 'configM':
        /* les éléments non sélectionnés n'ont plus de box shadow */
        document.getElementById('configS').style.boxShadow = "none";
        document.getElementById('configL').style.boxShadow = "none";
        /* quand on clique sur la config S, boxshadow autour*/
        document.getElementById(clicked).style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
            
        /* set valeur champ hidden correspondant au type de configuration selectionnee */
		document.getElementById('hiddenConfig').value = "config M";
		break;
        
        case 'configL':
        /* les éléments non sélectionnés n'ont plus de box shadow */
        document.getElementById('configS').style.boxShadow = "none";
        document.getElementById('configM').style.boxShadow = "none";
        /* quand on clique sur la config S, boxshadow autour*/
        document.getElementById(clicked).style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
            
        /* set valeur champ hidden correspondant au type de configuration selectionnee */
		document.getElementById('hiddenConfig').value = "config L";
		break;
    }
        
}

// stylise la tour choisie
// clicked = style the element id we click on (boitiers)
function styleTourElement(clicked){

    switch (clicked) {
        case 'boitier1':
        /* les éléments non séléctionnés redeviennent à une opacité de 0.5 */
        document.getElementById('boitier2').style.opacity = "0.5";
        document.getElementById('boitier3').style.opacity = "0.5";
        document.getElementById('boitier4').style.opacity = "0.5";
        /* les éléments non sélectionnés n'ont plus de box shadow */
        document.getElementById('boitier2').style.boxShadow = "none";
        document.getElementById('boitier3').style.boxShadow = "none";
        document.getElementById('boitier4').style.boxShadow = "none";
        /* quand on clique, box shadow et opacity 1 */
        document.getElementById(clicked).style.opacity = "1";
        document.getElementById(clicked).style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
		
		// set valeur champ hidden correspondant au numero du boitier selectionne
		document.getElementById('hiddenBoitier').value = "boitier 1";
		break;
            
        case 'boitier2':
        /* les éléments non séléctionnés redeviennent à une opacité de 0.5 */
        document.getElementById('boitier1').style.opacity = "0.5";
        document.getElementById('boitier3').style.opacity = "0.5";
        document.getElementById('boitier4').style.opacity = "0.5";
        /* les éléments non sélectionnés n'ont plus de box shadow */
        document.getElementById('boitier1').style.boxShadow = "none";
        document.getElementById('boitier3').style.boxShadow = "none";
        document.getElementById('boitier4').style.boxShadow = "none";
        /* quand on clique, border shadow et opacity 1 */
        document.getElementById(clicked).style.opacity = "1";
        document.getElementById(clicked).style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
			
		// set valeur champ hidden correspondant au numero du boitier selectionne
		document.getElementById('hiddenBoitier').value = "boitier 2";
        break;
			
        case 'boitier3':
        /* les éléments non séléctionnés redeviennent à une opacité de 0.5 */
        document.getElementById('boitier1').style.opacity = "0.5";
        document.getElementById('boitier2').style.opacity = "0.5";
        document.getElementById('boitier4').style.opacity = "0.5";
        /* les éléments non sélectionnés n'ont plus de box shadow */
        document.getElementById('boitier1').style.boxShadow = "none";
        document.getElementById('boitier2').style.boxShadow = "none";
        document.getElementById('boitier4').style.boxShadow = "none";
        /* quand on clique, border shadow et opacity 1 */
        document.getElementById(clicked).style.opacity = "1";
        document.getElementById(clicked).style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
			
		// set valeur champ hidden correspondant au numero du boitier selectionne
		document.getElementById('hiddenBoitier').value = "boitier 3";
		break;
            
        case 'boitier4':
        /* les éléments non séléctionnés redeviennent à une opacité de 0.5 */
        document.getElementById('boitier1').style.opacity = "0.5";
        document.getElementById('boitier2').style.opacity = "0.5";
        document.getElementById('boitier3').style.opacity = "0.5";
        /* les éléments non sélectionnés n'ont plus de box shadow */
        document.getElementById('boitier1').style.boxShadow = "none";
        document.getElementById('boitier2').style.boxShadow = "none";
        document.getElementById('boitier3').style.boxShadow = "none";
        /* quand on clique, border shadow et opacity 1 */
        document.getElementById(clicked).style.opacity = "1";
        document.getElementById(clicked).style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
			
		// set valeur champ hidden correspondant au numero du boitier selectionne
		document.getElementById('hiddenBoitier').value = "boitier 4";
		break;
    }
    
}

// stylise la couleur choisie
// clicked = style the element id we click on (couleurs)
function styleColorElement(clicked) {
        
    switch (clicked) {
        case 'couleur1':
        /* les éléments non séléctionnés redeviennent à une opacité de 0.5 */
        document.getElementById('couleur2').style.opacity = "0.5";
        document.getElementById('couleur3').style.opacity = "0.5";
        document.getElementById('couleur4').style.opacity = "0.5";
        document.getElementById('couleur5').style.opacity = "0.5";
        document.getElementById('couleur6').style.opacity = "0.5";
        /* les éléments non sélectionnés n'ont plus de box shadow */
        document.getElementById('couleur1').style.boxShadow = "none";
        document.getElementById('couleur3').style.boxShadow = "none";
        document.getElementById('couleur4').style.boxShadow = "none";
        document.getElementById('couleur5').style.boxShadow = "none";
        document.getElementById('couleur6').style.boxShadow = "none";
        /* quand on clique, border shadow et opacity 1 */
        document.getElementById(clicked).style.opacity = "1";
        document.getElementById(clicked).style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
			
		// set valeur champ hidden correspondant a la couleur du watercooling selectionnee
		document.getElementById('hiddenColor').value = "blanc";
		break;
            
            
        case 'couleur2':
        /* les éléments non séléctionnés redeviennent à une opacité de 0.5 */
        document.getElementById('couleur1').style.opacity = "0.5";
        document.getElementById('couleur3').style.opacity = "0.5";
        document.getElementById('couleur4').style.opacity = "0.5";
        document.getElementById('couleur5').style.opacity = "0.5";
        document.getElementById('couleur6').style.opacity = "0.5";
        /* les éléments non sélectionnés n'ont plus de box shadow */
        document.getElementById('couleur1').style.boxShadow = "none";
        document.getElementById('couleur3').style.boxShadow = "none";
        document.getElementById('couleur4').style.boxShadow = "none";
        document.getElementById('couleur5').style.boxShadow = "none";
        document.getElementById('couleur6').style.boxShadow = "none";
        /* quand on clique, border shadow et opacity 1 */
        document.getElementById(clicked).style.opacity = "1";
        document.getElementById(clicked).style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
			
		// set valeur champ hidden correspondant a la couleur du watercooling selectionnee
		document.getElementById('hiddenColor').value = "jaune";
		break;
            
        case 'couleur3':
        /* les éléments non séléctionnés redeviennent à une opacité de 0.5 */
        document.getElementById('couleur1').style.opacity = "0.5";
        document.getElementById('couleur2').style.opacity = "0.5";
        document.getElementById('couleur4').style.opacity = "0.5";
        document.getElementById('couleur5').style.opacity = "0.5";
        document.getElementById('couleur6').style.opacity = "0.5";
        /* les éléments non sélectionnés n'ont plus de box shadow */
        document.getElementById('couleur1').style.boxShadow = "none";
        document.getElementById('couleur2').style.boxShadow = "none";
        document.getElementById('couleur4').style.boxShadow = "none";
        document.getElementById('couleur5').style.boxShadow = "none";
        document.getElementById('couleur6').style.boxShadow = "none";
        /* quand on clique, border shadow et opacity 1 */
        document.getElementById(clicked).style.opacity = "1";
        document.getElementById(clicked).style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
			
		// set valeur champ hidden correspondant a la couleur du watercooling selectionnee
		document.getElementById('hiddenColor').value = "orange";
		break;
        
            
        case 'couleur4':
        /* les éléments non séléctionnés redeviennent à une opacité de 0.5 */
        document.getElementById('couleur1').style.opacity = "0.5";
        document.getElementById('couleur2').style.opacity = "0.5";
        document.getElementById('couleur3').style.opacity = "0.5";
        document.getElementById('couleur5').style.opacity = "0.5";
        document.getElementById('couleur6').style.opacity = "0.5";
        /* les éléments non sélectionnés n'ont plus de box shadow */
        document.getElementById('couleur1').style.boxShadow = "none";
        document.getElementById('couleur2').style.boxShadow = "none";
        document.getElementById('couleur3').style.boxShadow = "none";
        document.getElementById('couleur5').style.boxShadow = "none";
        document.getElementById('couleur6').style.boxShadow = "none";
        /* quand on clique, border shadow et opacity 1 */
        document.getElementById(clicked).style.opacity = "1";
        document.getElementById(clicked).style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
			
		// set valeur champ hidden correspondant a la couleur du watercooling selectionnee
		document.getElementById('hiddenColor').value = "rouge";
		break;
        
            
        case 'couleur5':
        /* les éléments non séléctionnés redeviennent à une opacité de 0.5 */
        document.getElementById('couleur1').style.opacity = "0.5";
        document.getElementById('couleur2').style.opacity = "0.5";
        document.getElementById('couleur3').style.opacity = "0.5";
        document.getElementById('couleur4').style.opacity = "0.5";
        document.getElementById('couleur6').style.opacity = "0.5";
        /* les éléments non sélectionnés n'ont plus de box shadow */
        document.getElementById('couleur1').style.boxShadow = "none";
        document.getElementById('couleur2').style.boxShadow = "none";
        document.getElementById('couleur3').style.boxShadow = "none";
        document.getElementById('couleur4').style.boxShadow = "none";
        document.getElementById('couleur6').style.boxShadow = "none";
        /* quand on clique, border shadow et opacity 1 */
        document.getElementById(clicked).style.opacity = "1";
        document.getElementById(clicked).style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
			
		// set valeur champ hidden correspondant au numero du boitier selectionne
		document.getElementById('hiddenColor').value = "bleu";
		break;
        
            
        case 'couleur6':
        /* les éléments non séléctionnés redeviennent à une opacité de 0.5 */
        document.getElementById('couleur1').style.opacity = "0.5";
        document.getElementById('couleur2').style.opacity = "0.5";
        document.getElementById('couleur3').style.opacity = "0.5";
        document.getElementById('couleur4').style.opacity = "0.5";
        document.getElementById('couleur5').style.opacity = "0.5";
        /* les éléments non sélectionnés n'ont plus de box shadow */
        document.getElementById('couleur1').style.boxShadow = "none";
        document.getElementById('couleur2').style.boxShadow = "none";
        document.getElementById('couleur3').style.boxShadow = "none";
        document.getElementById('couleur4').style.boxShadow = "none";
        document.getElementById('couleur5').style.boxShadow = "none";
        /* quand on clique, border shadow et opacity 1 */
        document.getElementById(clicked).style.opacity = "1";
        document.getElementById(clicked).style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
			
		// set valeur champ hidden correspondant a la couleur du watercooling selectionnee
		document.getElementById('hiddenColor').value = "vert";
		break;
    }
}
