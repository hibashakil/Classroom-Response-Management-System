"use strict";
var DataAccess = require('../DataAccess');
var passportLocalMongoose = require('passport-local-mongoose');
var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;
var CourseSchema = (function () {
    function CourseSchema() {
    }
    Object.defineProperty(CourseSchema, "schema", {
        get: function () {
            var schema = mongoose.Schema({
                course_id: {
                    type: Number,
                    required: true,
                    unique: true
                },
                courseName: {
                    type: String,
                    required: true,
                    unique: false
                },
                instructor: {
                    type: String,
                    required: true,
                    unique: false
                },
                studentsEnrolled: {
                    type: [Number],
                    required: true,
                    unique: false
                },
                attendanceCode: {
                    type: Number,
                    required: true,
                    unique: false
                }
            });
            schema.plugin(passportLocalMongoose);
            return schema;
        },
        enumerable: true,
        configurable: true
    });
    return CourseSchema;
}());
var cschema = mongooseConnection.model("Courses", CourseSchema.schema);
"";
module.exports = cschema;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXRhQWNjZXNzL3NjaGVtYXMvQ291cnNlU2NoZW1hLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFPLFVBQVUsV0FBVyxlQUFlLENBQUMsQ0FBQztBQUU3QyxJQUFJLHFCQUFxQixHQUFHLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0FBRy9ELElBQUksUUFBUSxHQUFHLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQztBQUMzQyxJQUFJLGtCQUFrQixHQUFHLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQztBQUd2RDtJQUFBO0lBa0NBLENBQUM7SUFoQ0csc0JBQVcsc0JBQU07YUFBakI7WUFDSSxJQUFJLE1BQU0sR0FBSSxRQUFRLENBQUMsTUFBTSxDQUFDO2dCQUMxQixTQUFTLEVBQUc7b0JBQ1IsSUFBSSxFQUFFLE1BQU07b0JBQ1osUUFBUSxFQUFFLElBQUk7b0JBQ2QsTUFBTSxFQUFFLElBQUk7aUJBQ2Y7Z0JBQ0QsVUFBVSxFQUFFO29CQUNSLElBQUksRUFBRSxNQUFNO29CQUNaLFFBQVEsRUFBRSxJQUFJO29CQUNkLE1BQU0sRUFBRSxLQUFLO2lCQUNoQjtnQkFDRCxVQUFVLEVBQUU7b0JBQ1IsSUFBSSxFQUFFLE1BQU07b0JBQ1osUUFBUSxFQUFFLElBQUk7b0JBQ2QsTUFBTSxFQUFFLEtBQUs7aUJBQ2hCO2dCQUNELGdCQUFnQixFQUFFO29CQUNkLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQztvQkFDZCxRQUFRLEVBQUUsSUFBSTtvQkFDZCxNQUFNLEVBQUUsS0FBSztpQkFDaEI7Z0JBQ0QsY0FBYyxFQUFFO29CQUNaLElBQUksRUFBRSxNQUFNO29CQUNaLFFBQVEsRUFBRSxJQUFJO29CQUNkLE1BQU0sRUFBRSxLQUFLO2lCQUNoQjthQUNKLENBQUMsQ0FBQztZQUVILE1BQU0sQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUNyQyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ2xCLENBQUM7OztPQUFBO0lBQ0wsbUJBQUM7QUFBRCxDQWxDQSxBQWtDQyxJQUFBO0FBRUQsSUFBSSxPQUFPLEdBQUcsa0JBQWtCLENBQUMsS0FBSyxDQUFlLFNBQVMsRUFBRSxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7QUE2Qm5FLEVBQUUsQ0FBQztBQUFyQixpQkFBUyxPQUFPLENBQUMiLCJmaWxlIjoiYXBwL2RhdGFBY2Nlc3Mvc2NoZW1hcy9Db3Vyc2VTY2hlbWEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGF0YUFjY2VzcyA9IHJlcXVpcmUoJy4uL0RhdGFBY2Nlc3MnKTtcclxuaW1wb3J0IElDb3Vyc2VNb2RlbCA9IHJlcXVpcmUoXCIuLy4uLy4uL21vZGVsL2ludGVyZmFjZXMvQ291cnNlTW9kZWxcIik7XHJcbnZhciBwYXNzcG9ydExvY2FsTW9uZ29vc2UgPSByZXF1aXJlKCdwYXNzcG9ydC1sb2NhbC1tb25nb29zZScpO1xyXG5cclxuXHJcbnZhciBtb25nb29zZSA9IERhdGFBY2Nlc3MubW9uZ29vc2VJbnN0YW5jZTtcclxudmFyIG1vbmdvb3NlQ29ubmVjdGlvbiA9IERhdGFBY2Nlc3MubW9uZ29vc2VDb25uZWN0aW9uO1xyXG5cclxuXHJcbmNsYXNzIENvdXJzZVNjaGVtYSB7XHJcblxyXG4gICAgc3RhdGljIGdldCBzY2hlbWEgKCkge1xyXG4gICAgICAgIHZhciBzY2hlbWEgPSAgbW9uZ29vc2UuU2NoZW1hKHtcclxuICAgICAgICAgICAgY291cnNlX2lkIDoge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB1bmlxdWU6IHRydWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY291cnNlTmFtZToge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB1bmlxdWU6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluc3RydWN0b3I6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdW5pcXVlOiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdHVkZW50c0Vucm9sbGVkOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBbTnVtYmVyXSxcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdW5pcXVlOiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhdHRlbmRhbmNlQ29kZToge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB1bmlxdWU6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2NoZW1hLnBsdWdpbihwYXNzcG9ydExvY2FsTW9uZ29vc2UpO1xyXG4gICAgICAgIHJldHVybiBzY2hlbWE7XHJcbiAgICB9XHJcbn1cclxuXHJcbnZhciBjc2NoZW1hID0gbW9uZ29vc2VDb25uZWN0aW9uLm1vZGVsPElDb3Vyc2VNb2RlbD4oXCJDb3Vyc2VzXCIsIENvdXJzZVNjaGVtYS5zY2hlbWEpO1xyXG5cclxuLy8gdmFyIGNvdXJzZTEgPSBuZXcgY3NjaGVtYSAoe1xyXG4vLyAgICAgY291cnNlX2lkOiAxMjMsXHJcbi8vICAgICBjb3Vyc2VOYW1lOiAnQVAnLFxyXG4vLyAgICAgaW5zdHJ1Y3RvcjogJ2FsYWxhJyxcclxuLy8gICAgIHN0dWRlbnRzRW5yb2xsZWQ6IFsxNzEwMDE4MF0sXHJcbi8vICAgICBhdHRlbmRhbmNlQ29kZTogMFxyXG4vLyB9KTtcclxuXHJcbi8vIGNvdXJzZTEuc2F2ZShmdW5jdGlvbihlcnIsIGNvdXJzZTEpIHtcclxuLy8gICBpZiAoZXJyKSByZXR1cm4gY29uc29sZS5lcnJvcihlcnIpO1xyXG4vLyAgIGNvbnNvbGUuZGlyKGNvdXJzZTEpO1xyXG4vLyB9KTtcclxuXHJcbi8vIHZhciBjb3Vyc2UyID0gbmV3IGNzY2hlbWEgKHtcclxuLy8gICAgIGNvdXJzZV9pZDogMTAwLFxyXG4vLyAgICAgY291cnNlTmFtZTogJ0ludHJvZHVjdGlvbiB0byBQb2wnLFxyXG4vLyAgICAgaW5zdHJ1Y3RvcjogJ0Jhc2hlZXInLFxyXG4vLyAgICAgc3R1ZGVudHNFbnJvbGxlZDogWzE3MTAwMTgwLCAxNzEwMDA3MSwgMTcwMjEyM10sXHJcbi8vICAgICBhdHRlbmRhbmNlQ29kZTogMFxyXG4vLyB9KTtcclxuXHJcbi8vIGNvdXJzZTIuc2F2ZShmdW5jdGlvbihlcnIsIGNvdXJzZTIpIHtcclxuLy8gICBpZiAoZXJyKSB7IHJldHVybiBjb25zb2xlLmVycm9yKGVycik7IH1cclxuLy8gICBjb25zb2xlLmRpcihjb3Vyc2UyKTtcclxuLy8gfSk7XHJcblxyXG5cclxuZXhwb3J0ID0gY3NjaGVtYTsgXCJcIjsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
