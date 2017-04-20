"use strict";
var DataAccess = require('../DataAccess');
var passportLocalMongoose = require('passport-local-mongoose');
var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;
var AttendanceSchema = (function () {
    function AttendanceSchema() {
    }
    Object.defineProperty(AttendanceSchema, "schema", {
        get: function () {
            var schema = mongoose.Schema({
                course_id: {
                    type: Number,
                    required: true,
                    unique: false,
                },
                session: {
                    type: Number,
                    required: true,
                    unique: false,
                },
                date: {
                    type: Number,
                    required: true,
                    unique: false,
                },
                studentsPresent: {
                    type: [Number],
                    required: true,
                    unique: false,
                }
            });
            schema.plugin(passportLocalMongoose);
            return schema;
        },
        enumerable: true,
        configurable: true
    });
    return AttendanceSchema;
}());
var aschema = mongooseConnection.model("Attendance", AttendanceSchema.schema);
"";
module.exports = aschema;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXRhQWNjZXNzL3NjaGVtYXMvQXR0ZW5kYW5jZVNjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBTyxVQUFVLFdBQVcsZUFBZSxDQUFDLENBQUM7QUFFN0MsSUFBSSxxQkFBcUIsR0FBRyxPQUFPLENBQUMseUJBQXlCLENBQUMsQ0FBQztBQUcvRCxJQUFJLFFBQVEsR0FBRyxVQUFVLENBQUMsZ0JBQWdCLENBQUM7QUFDM0MsSUFBSSxrQkFBa0IsR0FBRyxVQUFVLENBQUMsa0JBQWtCLENBQUM7QUFHdkQ7SUFBQTtJQTZCQSxDQUFDO0lBM0JHLHNCQUFXLDBCQUFNO2FBQWpCO1lBQ0ksSUFBSSxNQUFNLEdBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQztnQkFDMUIsU0FBUyxFQUFHO29CQUNSLElBQUksRUFBRSxNQUFNO29CQUNaLFFBQVEsRUFBRSxJQUFJO29CQUNkLE1BQU0sRUFBRSxLQUFLO2lCQUNoQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ0wsSUFBSSxFQUFFLE1BQU07b0JBQ1osUUFBUSxFQUFFLElBQUk7b0JBQ2QsTUFBTSxFQUFFLEtBQUs7aUJBQ2hCO2dCQUNELElBQUksRUFBRTtvQkFDRixJQUFJLEVBQUUsTUFBTTtvQkFDWixRQUFRLEVBQUUsSUFBSTtvQkFDZCxNQUFNLEVBQUUsS0FBSztpQkFDaEI7Z0JBQ0QsZUFBZSxFQUFFO29CQUNiLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQztvQkFDZCxRQUFRLEVBQUUsSUFBSTtvQkFDZCxNQUFNLEVBQUUsS0FBSztpQkFDaEI7YUFDSixDQUFDLENBQUM7WUFFSCxNQUFNLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDckMsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUNsQixDQUFDOzs7T0FBQTtJQUNMLHVCQUFDO0FBQUQsQ0E3QkEsQUE2QkMsSUFBQTtBQUVELElBQUksT0FBTyxHQUFHLGtCQUFrQixDQUFDLEtBQUssQ0FBbUIsWUFBWSxFQUFFLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBMEM5RSxFQUFFLENBQUM7QUFBckIsaUJBQVMsT0FBTyxDQUFDIiwiZmlsZSI6ImFwcC9kYXRhQWNjZXNzL3NjaGVtYXMvQXR0ZW5kYW5jZVNjaGVtYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEYXRhQWNjZXNzID0gcmVxdWlyZSgnLi4vRGF0YUFjY2VzcycpO1xyXG5pbXBvcnQgSUF0dGVuZGFuY2VNb2RlbCA9IHJlcXVpcmUoXCIuLy4uLy4uL21vZGVsL2ludGVyZmFjZXMvQXR0ZW5kYW5jZU1vZGVsXCIpO1xyXG52YXIgcGFzc3BvcnRMb2NhbE1vbmdvb3NlID0gcmVxdWlyZSgncGFzc3BvcnQtbG9jYWwtbW9uZ29vc2UnKTtcclxuXHJcblxyXG52YXIgbW9uZ29vc2UgPSBEYXRhQWNjZXNzLm1vbmdvb3NlSW5zdGFuY2U7XHJcbnZhciBtb25nb29zZUNvbm5lY3Rpb24gPSBEYXRhQWNjZXNzLm1vbmdvb3NlQ29ubmVjdGlvbjtcclxuXHJcblxyXG5jbGFzcyBBdHRlbmRhbmNlU2NoZW1hIHtcclxuXHJcbiAgICBzdGF0aWMgZ2V0IHNjaGVtYSAoKSB7XHJcbiAgICAgICAgdmFyIHNjaGVtYSA9ICBtb25nb29zZS5TY2hlbWEoe1xyXG4gICAgICAgICAgICBjb3Vyc2VfaWQgOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHVuaXF1ZTogZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNlc3Npb246IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdW5pcXVlOiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGF0ZToge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB1bmlxdWU6IGZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdHVkZW50c1ByZXNlbnQ6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFtOdW1iZXJdLFxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB1bmlxdWU6IGZhbHNlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNjaGVtYS5wbHVnaW4ocGFzc3BvcnRMb2NhbE1vbmdvb3NlKTtcclxuICAgICAgICByZXR1cm4gc2NoZW1hO1xyXG4gICAgfVxyXG59XHJcblxyXG52YXIgYXNjaGVtYSA9IG1vbmdvb3NlQ29ubmVjdGlvbi5tb2RlbDxJQXR0ZW5kYW5jZU1vZGVsPihcIkF0dGVuZGFuY2VcIiwgQXR0ZW5kYW5jZVNjaGVtYS5zY2hlbWEpO1xyXG5cclxuLy8gdmFyIGF0dGVuZGFuY2UyID0gbmV3IGFzY2hlbWEgKHtcclxuLy8gICAgIGNvdXJzZV9pZDogMTIzLFxyXG4vLyAgICAgc2Vzc2lvbjogMixcclxuLy8gICAgIGRhdGU6IDIzMTEsXHJcbi8vICAgICBzdHVkZW50c1ByZXNlbnQ6IFsxNzEwMDE4MCwgMTcxMDAwMzEsIDE3MTAwMTgzXVxyXG4vLyB9KTtcclxuXHJcbi8vIGF0dGVuZGFuY2UyLnNhdmUoZnVuY3Rpb24oZXJyLCBhdHRlbmRhbmNlMikge1xyXG4vLyAgIGlmIChlcnIpIHJldHVybiBjb25zb2xlLmVycm9yKGVycik7XHJcbi8vICAgY29uc29sZS5kaXIoYXR0ZW5kYW5jZTIpO1xyXG4vLyB9KTtcclxuLy8gY29uc29sZS5sb2coXCJBdHRlbmRhbmNlMiBzYXZlZFwiKTtcclxuLy8gdmFyIGF0dGVuZGFuY2UzID0gbmV3IGFzY2hlbWEgKHtcclxuLy8gICAgIGNvdXJzZV9pZDogMTIzLFxyXG4vLyAgICAgc2Vzc2lvbjogMyxcclxuLy8gICAgIGRhdGU6IDI0MTEsXHJcbi8vICAgICBzdHVkZW50c1ByZXNlbnQ6IFsxNzEwMDE3MCwgMTcxMDAxOTAsIDE3MTAwMTgwXVxyXG4vLyB9KTtcclxuXHJcbi8vIGF0dGVuZGFuY2UzLnNhdmUoZnVuY3Rpb24oZXJyLCBhdHRlbmRhbmNlMykge1xyXG4vLyAgIGlmIChlcnIpIHJldHVybiBjb25zb2xlLmVycm9yKGVycik7XHJcbi8vICAgY29uc29sZS5kaXIoYXR0ZW5kYW5jZTMpO1xyXG4vLyB9KTtcclxuXHJcbi8vIGNvbnNvbGUubG9nKFwiYXR0ZW5kYW5jZTMgc2F2ZWRcIik7XHJcblxyXG4vLyB2YXIgYXR0ZW5kYW5jZTEgPSBuZXcgYXNjaGVtYSAoe1xyXG4vLyAgICAgY291cnNlX2lkOiAxMjMsXHJcbi8vICAgICBzZXNzaW9uOiAxLFxyXG4vLyAgICAgZGF0ZTogMjIxMSxcclxuLy8gICAgIHN0dWRlbnRzUHJlc2VudDogWzE3MTAwMDE3MF1cclxuXHJcbi8vIH0pO1xyXG5cclxuLy8gYXR0ZW5kYW5jZTEuc2F2ZShmdW5jdGlvbihlcnIsIGF0dGVuZGFuY2UxKSB7XHJcbi8vICAgaWYgKGVycikgcmV0dXJuIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuLy8gICBjb25zb2xlLmRpcihhdHRlbmRhbmNlMSk7XHJcbi8vIH0pO1xyXG5cclxuXHJcbmV4cG9ydCA9IGFzY2hlbWE7IFwiXCI7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
