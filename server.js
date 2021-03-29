// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/account/apikeys
Stripe.apiKey = "sk_test_51IZEoiI7JRWuWnK1h6ypPHsg7EZn4mVMj11tIkKcI9DJXHuLG7HexoC0BjsB3FcaCD28kD0hLk5KN3bzxevQ3ojD005nwTcaXE";

post("/create-checkout-session", (request, response) -> {
    response.type("application/json");
    CreateCheckoutSessionRequest req = gson.fromJson(request.body(), CreateCheckoutSessionRequest.class);

    // See https://stripe.com/docs/api/checkout/sessions/create
    // for additional parameters to pass.
    // {CHECKOUT_SESSION_ID} is a string literal; do not change it!
    // the actual Session ID is returned in the query parameter when your customer
    // is redirected to the success page.
    SessionCreateParams params = new SessionCreateParams.Builder()
        .setSuccessUrl("success.html?session_id={CHECKOUT_SESSION_ID}")
        .setCancelUrl("canceled.html")
        .addPaymentMethodType(SessionCreateParams.PaymentMethodType.CARD)
        .setMode(SessionCreateParams.Mode.SUBSCRIPTION)
        .addLineItem(new SessionCreateParams.LineItem.Builder()
          // For metered billing, do not pass quantity
          .setQuantity(1L)
          .setPrice(req.getPriceId())
          .build()
        )
        .build();

    try {
        Session session = Session.create(params);
        Map<String, Object> responseData = new HashMap<>();
        responseData.put("sessionId", session.getId());
        return gson.toJson(responseData);
    } catch(Exception e) {
        Map<String, Object> messageData = new HashMap<>();
        messageData.put("message", e.getMessage());
        Map<String, Object> responseData = new HashMap<>();
        responseData.put("error", messageData);
        response.status(400);
        return gson.toJson(responseData);
    }
});


