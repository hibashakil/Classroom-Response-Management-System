"use strict";
var Constants = (function () {
    function Constants() {
    }
    Constants.DB_CONNECTION_STRING = process.env.NODE_ENV === 'production' ? process.env.dbURI : "mongodb://localhost:27017/classRoom";
    return Constants;
}());
Object.seal(Constants);
module.exports = Constants;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy9jb25zdGFudHMvY29uc3RhbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUFBO0lBRUEsQ0FBQztJQURVLDhCQUFvQixHQUFXLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxLQUFLLFlBQVksR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxxQ0FBcUMsQ0FBQTtJQUMzSSxnQkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUN2QixpQkFBUyxTQUFTLENBQUMiLCJmaWxlIjoiY29uZmlnL2NvbnN0YW50cy9jb25zdGFudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY2xhc3MgQ29uc3RhbnRzIHtcclxuICAgIHN0YXRpYyBEQl9DT05ORUNUSU9OX1NUUklORzogc3RyaW5nID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/IHByb2Nlc3MuZW52LmRiVVJJIDogXCJtb25nb2RiOi8vbG9jYWxob3N0OjI3MDE3L2NsYXNzUm9vbVwiXHJcbn1cclxuT2JqZWN0LnNlYWwoQ29uc3RhbnRzKTtcclxuZXhwb3J0ID0gQ29uc3RhbnRzOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
