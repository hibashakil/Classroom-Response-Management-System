"use strict";
var DataAccess = require('../DataAccess');
var passportLocalMongoose = require('passport-local-mongoose');
var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;
var UserSchema = (function () {
    function UserSchema() {
    }
    Object.defineProperty(UserSchema, "schema", {
        get: function () {
            var schema = mongoose.Schema({
                name: {
                    type: String,
                    required: true
                },
                password: {
                    type: String,
                    required: true
                },
                username: {
                    type: String,
                    required: true,
                    unique: true
                },
                phoneNumber: {
                    type: String,
                    required: true
                }
            });
            schema.plugin(passportLocalMongoose);
            return schema;
        },
        enumerable: true,
        configurable: true
    });
    return UserSchema;
}());
var schema = mongooseConnection.model("Users", UserSchema.schema);
"";
module.exports = schema;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXRhQWNjZXNzL3NjaGVtYXMvVXNlclNjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBTyxVQUFVLFdBQVcsZUFBZSxDQUFDLENBQUM7QUFFN0MsSUFBSSxxQkFBcUIsR0FBRyxPQUFPLENBQUMseUJBQXlCLENBQUMsQ0FBQztBQUMvRCxJQUFJLFFBQVEsR0FBRyxVQUFVLENBQUMsZ0JBQWdCLENBQUM7QUFDM0MsSUFBSSxrQkFBa0IsR0FBRyxVQUFVLENBQUMsa0JBQWtCLENBQUM7QUFHdkQ7SUFBQTtJQTBCQSxDQUFDO0lBeEJHLHNCQUFXLG9CQUFNO2FBQWpCO1lBQ0ksSUFBSSxNQUFNLEdBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQztnQkFDMUIsSUFBSSxFQUFHO29CQUNILElBQUksRUFBRSxNQUFNO29CQUNaLFFBQVEsRUFBRSxJQUFJO2lCQUNqQjtnQkFDRCxRQUFRLEVBQUU7b0JBQ04sSUFBSSxFQUFFLE1BQU07b0JBQ1osUUFBUSxFQUFFLElBQUk7aUJBQ2pCO2dCQUNELFFBQVEsRUFBRTtvQkFDTixJQUFJLEVBQUUsTUFBTTtvQkFDWixRQUFRLEVBQUUsSUFBSTtvQkFDZCxNQUFNLEVBQUUsSUFBSTtpQkFDZjtnQkFDRCxXQUFXLEVBQUU7b0JBQ1QsSUFBSSxFQUFFLE1BQU07b0JBQ1osUUFBUSxFQUFFLElBQUk7aUJBQ2pCO2FBQ0osQ0FBQyxDQUFDO1lBRUgsTUFBTSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQ3JDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDbEIsQ0FBQzs7O09BQUE7SUFDTCxpQkFBQztBQUFELENBMUJBLEFBMEJDLElBQUE7QUFFRCxJQUFJLE1BQU0sR0FBRyxrQkFBa0IsQ0FBQyxLQUFLLENBQWEsT0FBTyxFQUFFLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQXdDN0QsRUFBRSxDQUFDO0FBQXBCLGlCQUFTLE1BQU0sQ0FBQyIsImZpbGUiOiJhcHAvZGF0YUFjY2Vzcy9zY2hlbWFzL1VzZXJTY2hlbWEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGF0YUFjY2VzcyA9IHJlcXVpcmUoJy4uL0RhdGFBY2Nlc3MnKTtcclxuaW1wb3J0IElVc2VyTW9kZWwgPSByZXF1aXJlKFwiLi8uLi8uLi9tb2RlbC9pbnRlcmZhY2VzL1VzZXJNb2RlbFwiKTtcclxudmFyIHBhc3Nwb3J0TG9jYWxNb25nb29zZSA9IHJlcXVpcmUoJ3Bhc3Nwb3J0LWxvY2FsLW1vbmdvb3NlJyk7XHJcbnZhciBtb25nb29zZSA9IERhdGFBY2Nlc3MubW9uZ29vc2VJbnN0YW5jZTtcclxudmFyIG1vbmdvb3NlQ29ubmVjdGlvbiA9IERhdGFBY2Nlc3MubW9uZ29vc2VDb25uZWN0aW9uO1xyXG5cclxuXHJcbmNsYXNzIFVzZXJTY2hlbWEge1xyXG5cclxuICAgIHN0YXRpYyBnZXQgc2NoZW1hICgpIHtcclxuICAgICAgICB2YXIgc2NoZW1hID0gIG1vbmdvb3NlLlNjaGVtYSh7XHJcbiAgICAgICAgICAgIG5hbWUgOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwYXNzd29yZDoge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdXNlcm5hbWU6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdW5pcXVlOiB0cnVlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBob25lTnVtYmVyOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNjaGVtYS5wbHVnaW4ocGFzc3BvcnRMb2NhbE1vbmdvb3NlKTtcclxuICAgICAgICByZXR1cm4gc2NoZW1hO1xyXG4gICAgfVxyXG59XHJcblxyXG52YXIgc2NoZW1hID0gbW9uZ29vc2VDb25uZWN0aW9uLm1vZGVsPElVc2VyTW9kZWw+KFwiVXNlcnNcIiwgVXNlclNjaGVtYS5zY2hlbWEpO1xyXG5cclxuLy8gdmFyIHN0dWRlbnQxID0gbmV3IHNjaGVtYSAoe1xyXG4vLyAgICAgbmFtZTogJ0plZWhhbicsIFxyXG4vLyAgICAgcGFzc3dvcmQ6ICdhYmNkJyxcclxuLy8gICAgIHVzZXJuYW1lOiAnMTcxMDAxODAnLFxyXG4vLyAgICAgcGhvbmVOdW1iZXI6ICc0ODQ1J1xyXG5cclxuLy8gfSk7XHJcblxyXG4vLyBzdHVkZW50MS5zYXZlKGZ1bmN0aW9uKGVyciwgc3R1ZGVudDEpIHtcclxuLy8gICBpZiAoZXJyKSByZXR1cm4gY29uc29sZS5lcnJvcihlcnIpO1xyXG4vLyAgIGNvbnNvbGUuZGlyKHN0dWRlbnQxKTtcclxuLy8gfSk7XHJcblxyXG4vLyB2YXIgc3R1ZGVudDIgPSBuZXcgc2NoZW1hICh7XHJcbi8vICAgICBuYW1lOiAnU2hpemEnLCBcclxuLy8gICAgIHBhc3N3b3JkOiAnZWZnaCcsXHJcbi8vICAgICB1c2VybmFtZTogJzE3MTAwMTkwJyxcclxuLy8gICAgIHBob25lTnVtYmVyOiAnZGdkZmcnXHJcblxyXG4vLyB9KTtcclxuXHJcbi8vIHN0dWRlbnQyLnNhdmUoZnVuY3Rpb24oZXJyLCBzdHVkZW50Mikge1xyXG4vLyAgIGlmIChlcnIpIHJldHVybiBjb25zb2xlLmVycm9yKGVycik7XHJcbi8vICAgY29uc29sZS5kaXIoc3R1ZGVudDIpO1xyXG4vLyB9KTtcclxuXHJcbi8vIHZhciBzdHVkZW50MyA9IG5ldyBzY2hlbWEgKHtcclxuLy8gICAgIG5hbWU6ICdIaWJhJywgXHJcbi8vICAgICBwYXNzd29yZDogJ2RqamZkamRmJyxcclxuLy8gICAgIHVzZXJuYW1lOiAnMTcxMDAxNzAnLFxyXG4vLyAgICAgcGhvbmVOdW1iZXIgOiAnc2dkc2dzZydcclxuXHJcbi8vIH0pO1xyXG5cclxuLy8gc3R1ZGVudDMuc2F2ZShmdW5jdGlvbihlcnIsIHN0dWRlbnQzKSB7XHJcbi8vICAgaWYgKGVycikgcmV0dXJuIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuLy8gICBjb25zb2xlLmRpcihzdHVkZW50Myk7XHJcbi8vIH0pO1xyXG5leHBvcnQgPSBzY2hlbWE7IFwiXCI7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
