<?php
require_once('../vendor/autoload.php');
// Set your secret key: remember to change this to your live secret key in production
// See your keys here https://dashboard.stripe.com/account/apikeys
\Stripe\Stripe::setApiKey("sk_live_");


if (isset($_POST['stripeToken'])) {
    
    // Get the credit card details submitted by the form
    $token = $_POST['stripeToken'];

    // get the user's selection
    $hiddenConfig = $_POST['hiddenConfig'];
    $hiddenBoitier = $_POST['hiddenBoitier'];
    $hiddenColor = $_POST['hiddenColor'];
    $price = 0;
}

// $price (en centimes) change selon la configuration choisie
switch ($hiddenConfig) {
    case 'config S':
        $price = 250000;
        break;
    case 'config M':
        $price = 330000;
        break;
    case 'config L':
        $price = 500000;
        break;
    case '0':
        $price = 0;
        break;
        
}

include('headerPurchaseMessage.inc.php');
// Create the charge on Stripe's servers - this will charge the user's card
try {
  $charge = \Stripe\Charge::create(array(
    "amount" => $price, // amount in cents, again
    "currency" => "chf",
    "source" => $token,
    "metadata" => array("tower" => $hiddenBoitier, "color" => $hiddenColor)
    ));
    echo '<div class="div-message-displaying">  
    <div class="alert alert-success success-purchase" role="alert">

        <h1>Merci pour votre achat !</h1>
        <h2>Une confirmation de commande vous sera envoyée par email dans les 24h.</h2>

    </div>';
}  catch (\Stripe\Error\ApiConnection $e) {
    echo '<div class="alert alert-warning network-error" role="alert">

        <h1>Oups, une erreur est survenue !</h1>
        <h2>Le paiement ne s\'est pas effectué à cause d\'une erreur de réseau. Veuillez réessayer plus tard, ou nous contacter via le formulaire.</h2>

    </div>';
} catch (\Stripe\Error\InvalidRequest $e) {
        echo '<div class="alert alert-warning invalidRequest-error" role="alert">
        
        <h1>Oups, une erreur est survenue !</h1>
        <h2>Le paiement ne s\'est pas effectué. Veuillez sélectionner un élément de chaque étape (une configuration, un boîtier et la couleur du watercooling souhaitée).</h2>
        
    </div>';
} catch (\Stripe\Error\Api $e) {
    echo '<div class="alert alert-warning stripeServersDown-error" role="alert">

        <h1>Oups, une erreur est survenue !</h1>
        <h2>Le paiement ne s\'est pas effectué. Les serveurs sont en panne. Veuillez réessayer plus tard, ou nous contacter via le formulaire.</h2>

    </div>';
} catch (\Stripe\Error\Card $e) {
    echo '<div class="alert alert-warning card-error" role="alert">

        <h1>Oups, une erreur est survenue !</h1>
        <h2>Le paiement ne s\'est pas effectué. Votre carte a été refusée, veuillez contacter votre banque, ou nous contacter via le formulaire.</h2>

    </div>';
}
?>
