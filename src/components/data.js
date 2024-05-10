const dataa =
{
    "isSuccess": true,
    "responseCode": 200,
    "message": "Data Fetched successfully.",
    "data": {
        "id": 2497,
        "first_name": "Arthur",
        "sur_name": "Shepard",
        "social_auth_token": null,
        "social_auth_type": "normal",
        "email": "jivynosyfu@mailinator.com",
        "qr_code": 0,
        "phone": "+1205227476",
        "created_at": "2024-05-03T11:18:53.000000Z",
        "guest_id": 10257,
        "stripe_reference": "cus_Q2Owl8Ao6Fswlw",
        "is_super_user": 0,
        "two_factor_code": null,
        "two_factor_expires_at": null,
        "crm_id": null,
        "status": 1,
        "active_order_id": 6089,
        "wallet": [
            {
                "id": 1200,
                "wallet_id": 326,
                "amount": "192.00",
                "transaction_type": "credit",
                "transaction_date": "2024-05-03 11:27:32",
                "order_id": 6091,
                "description": "Credited to your wallet because you have Applied Change in Preferences!",
                "by_admin": 0
            }
        ],
        "allergies": [
            {
                "id": 9,
                "title": "Egg",
                "pivot": {
                    "user_id": 2497,
                    "allergy_id": 9
                }
            }
        ],
        "profile": {
            "id": 2288,
            "user_id": 2497,
            "vegeterian": "No I am not",
            "meal_plan_start_date": "2024-05-06 00:00:00",
            "meal_plan_end_date": "2024-05-22 00:00:00",
            "delivery_time": "Al Ain:3am-7am",
            "delivery_address": null,
            "gender": "Female",
            "days_food_delivery": [
                "Mon",
                "Tues",
                "Weds",
                "Thur",
                "Fri",
                "Sat"
            ],
            "is_subscribed": 0,
            "card_id": 1839,
            "address_id": 1845,
            "culinary_check": 0,
            "is_beta": 0,
            "notification": 1,
            "exclude_breakfast": 0,
            "wallet_notify_count": 0
        },
        "pause_dates": [
            {
                "id": 27245,
                "user_id": 2497,
                "meal_plan_pause_date": "2024-05-08 00:00:00"
            },
            {
                "id": 27246,
                "user_id": 2497,
                "meal_plan_pause_date": "2024-05-09 00:00:00"
            },
            {
                "id": 27247,
                "user_id": 2497,
                "meal_plan_pause_date": "2024-05-10 00:00:00"
            }
        ],
        "dislikes": [
            {
                "id": 35,
                "title": "Banana",
                "pivot": {
                    "user_id": 2497,
                    "food_id": 35
                }
            },
            {
                "id": 131,
                "title": "Almonds",
                "pivot": {
                    "user_id": 2497,
                    "food_id": 131
                }
            }
        ],
        "guest": {
            "id": 10257,
            "key": "bbdedab4-7943-4422-87ff-53bedb84f740",
            "gender": "Female",
            "main_goal": "Lose weight / Get lean",
            "email": null,
            "is_first_discount": 0,
            "recommended_calories_per_day": 1500,
            "practical_deliver_calories_per_day": 1100,
            "average_daily_activity_level": "Medium",
            "meal_plan": [
                500,
                400
            ],
            "snack_plan": [
                200
            ],
            "price": 94.06,
            "age": 35,
            "weight": 65,
            "average_meals_day": 3,
            "average_snacks_day": 3,
            "meals_deliver_per_day": 2,
            "snacks_deliver_per_day": 1,
            "meal_days_per_week": 6,
            "meal_plan_require_weeks": 2,
            "calories_meal_require_per_day": null,
            "total_meals": 24,
            "total_snacks": 24,
            "grand_total_meals": 48,
            "weight_unit": "kg",
            "type": "quiz_a",
            "default_calorie": 400,
            "calories_without_water_weight": 1800
        }
    }
}

export default dataa;
