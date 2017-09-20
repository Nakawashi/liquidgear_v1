<?php
session_start();

	// PHP -> name ($_POST)
    // JavaScript -> id (getElementById)

    // le client a choisi, choix enregistrés dans valeur hidden et attribuées aux var de SESSION
	if (isset($_POST['validerChoix'])) {
		
		// coniguration selectionnee
        $_SESSION['configSelectionne'] = $_POST['hiddenConfig'];
		
		// boitier selectionne : dans index.php
		$_SESSION['boitierSelectionne'] = $_POST['hiddenBoitier'];
		
		// couleur selectionnee
		$_SESSION['couleurSelectionne'] = $_POST['hiddenColor'];
		
		
/*		echo $_SESSION['configSelectionne'] . '<br>';
		echo $_SESSION['boitierSelectionne'] . '<br>';
		echo $_SESSION['couleurSelectionne'] . '<br>';
		
		echo '<br><a href="../index.php">retour index</a>';*/
		
		// redirection immediate
		//header('Location: ../index.php');
	
	
	}






















?>