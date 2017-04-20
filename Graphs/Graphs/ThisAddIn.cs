using System;
using WebSocketSharp;
using PowerPoint = Microsoft.Office.Interop.PowerPoint;
using System.Diagnostics;
using Excel = Microsoft.Office.Interop.Excel;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Threading;
using Microsoft.Office.Core;

namespace Graphs
{
    public partial class ThisAddIn
    { 
        private void ThisAddIn_Startup(object sender, System.EventArgs e)
        {
            this.Application.PresentationNewSlide +=
            new PowerPoint.EApplication_PresentationNewSlideEventHandler(
            Application_PresentationNewSlide);
        }

        void Application_PresentationNewSlide(PowerPoint.Slide S)
        {
            //GEN_Poll_Chart(S);
            GEN_Daily_Attendance_Chart(S);
            //GEN_Student_Record_Chart(S);
        }

        class PollNode
        {
            [JsonProperty("question")]
            public string Question { get; set; }

            [JsonProperty("a")]
            public string A { get; set; }

            [JsonProperty("b")]
            public string B { get; set; }

            [JsonProperty("c")]
            public string C { get; set; }

            [JsonProperty("d")]
            public string D { get; set; }

            [JsonProperty("freq_a")]
            public string Freq_A { get; set; }

            [JsonProperty("freq_b")]
            public string Freq_B { get; set; }

            [JsonProperty("freq_c")]
            public string Freq_C { get; set; }

            [JsonProperty("freq_d")]
            public string Freq_D { get; set; }

            [JsonProperty("correct")]
            public string Correct { get; set; }
        }

        class DailyAttendanceNode
        {
            [JsonProperty("name")]
            public string Name { get; set; }

            [JsonProperty("status")]
            public string Status { get; set; }

        }

        class StudentRecordNode
        {
            [JsonProperty("name")]
            public string name { get; set; }

            [JsonProperty("first")]
            public string first { get; set; }

            [JsonProperty("second")]
            public string second { get; set; }

            [JsonProperty("third")]
            public string third { get; set; }

            [JsonProperty("fourth")]
            public string fourth { get; set; }

            [JsonProperty("fifth")]
            public string fifth { get; set; }

            [JsonProperty("sixth")]
            public string sixth { get; set; }

            [JsonProperty("seventh")]
            public string seventh { get; set; }

            [JsonProperty("eighth")]
            public string eighth { get; set; }

            [JsonProperty("ninth")]
            public string ninth { get; set; }

            [JsonProperty("tenth")]
            public string tenth { get; set; }

            [JsonProperty("eleventh")]
            public string eleventh { get; set; }

            [JsonProperty("twelfth")]
            public string twelfth { get; set; }

            [JsonProperty("thirteenth")]
            public string thirteenth { get; set; }

            [JsonProperty("fourteenth")]
            public string fourteenth { get; set; }

            [JsonProperty("fifteenth")]
            public string fifteenth { get; set; }

            [JsonProperty("sixteenth")]
            public string sixteenth { get; set; }

            [JsonProperty("seventeenth")]
            public string seventeenth { get; set; }

            [JsonProperty("eighteenth")]
            public string eighteenth { get; set; }

            [JsonProperty("nineteenth")]
            public string nineteenth { get; set; }

            [JsonProperty("twentieth")]
            public string twentieth { get; set; }

            [JsonProperty("twentyFirst")]
            public string twentyFirst { get; set; }

            [JsonProperty("twentySecond")]
            public string twentySecond { get; set; }

            [JsonProperty("twentyThird")]
            public string twentyThird { get; set; }

            [JsonProperty("twentyFourth")]
            public string twentyFourth { get; set; }

            [JsonProperty("twentyFifth")]
            public string twentyFifth { get; set; }

            [JsonProperty("twentySixth")]
            public string twentySixth { get; set; }

            [JsonProperty("twentySeventh")]
            public string twentySeventh { get; set; }

            [JsonProperty("twentyEight")]
            public string twentyEighth { get; set; }

            [JsonProperty("twentyNinth")]
            public string twentyNinth { get; set; }

            [JsonProperty("thirtieth")]
            public string thirtieth { get; set; }
        }

        public static void GEN_Poll_Chart(PowerPoint.Slide Sld)
        {
            //Select the slide and set its layout
            Sld.Select();
            Sld.Layout = Microsoft.Office.Interop.PowerPoint.PpSlideLayout.ppLayoutBlank;

            //Add a default chart in slide
            Sld.Shapes.AddChart(Microsoft.Office.Core.XlChartType.xl3DColumn, 200F, 200F, 400F, 300F);

            //Add a heading
            PowerPoint.Shape textBox = Sld.Shapes.AddTextbox(Microsoft.Office.Core.MsoTextOrientation.msoTextOrientationHorizontal, 0, 20, 1000, 70);
            textBox.TextFrame.TextRange.InsertAfter("Daily Class Poll");
            textBox.TextFrame.TextRange.Font.Size = 30;
            textBox.TextFrame.VerticalAnchor = Microsoft.Office.Core.MsoVerticalAnchor.msoAnchorMiddle;
            textBox.TextFrame.HorizontalAnchor = Microsoft.Office.Core.MsoHorizontalAnchor.msoAnchorCenter;

            //Access the added chart
            Microsoft.Office.Interop.PowerPoint.Chart ppChart = Sld.Shapes[1].Chart;

            //Access the chart data
            Microsoft.Office.Interop.PowerPoint.ChartData chartData = ppChart.ChartData;

            //Create instance to Excel workbook to work with chart data
            Microsoft.Office.Interop.Excel.Workbook dataWorkbook = (Microsoft.Office.Interop.Excel.Workbook)chartData.Workbook;

            //Accessing the data worksheet for chart
            Microsoft.Office.Interop.Excel.Worksheet dataSheet = dataWorkbook.Worksheets[1];

            //Setting the range of chart
            Microsoft.Office.Interop.Excel.Range tRange = dataSheet.Cells.get_Range("A1", "B5");

            //Create a Table and applying the set range on chart data table
            Microsoft.Office.Interop.Excel.ListObject tbl1 = dataSheet.ListObjects["Table1"];
            tbl1.Resize(tRange);

            //Thread.Sleep(3000);
            Debug.WriteLine("over 1");

            //Setting values for categories and respective series data
            ((Microsoft.Office.Interop.Excel.Range)(dataSheet.Cells.get_Range("A2"))).FormulaR1C1 = "A";
            ((Microsoft.Office.Interop.Excel.Range)(dataSheet.Cells.get_Range("A3"))).FormulaR1C1 = "B";
            ((Microsoft.Office.Interop.Excel.Range)(dataSheet.Cells.get_Range("A4"))).FormulaR1C1 = "C";
            ((Microsoft.Office.Interop.Excel.Range)(dataSheet.Cells.get_Range("A5"))).FormulaR1C1 = "D";
            ((Microsoft.Office.Interop.Excel.Range)(dataSheet.Cells.get_Range("B2"))).FormulaR1C1 = 0;
            ((Microsoft.Office.Interop.Excel.Range)(dataSheet.Cells.get_Range("B3"))).FormulaR1C1 = 0;
            ((Microsoft.Office.Interop.Excel.Range)(dataSheet.Cells.get_Range("B4"))).FormulaR1C1 = 0;
            ((Microsoft.Office.Interop.Excel.Range)(dataSheet.Cells.get_Range("B5"))).FormulaR1C1 = 0;

            //Delete the legend for neatness
            Microsoft.Office.Interop.PowerPoint.Legend legend = null;
            legend = ppChart.Legend;
            legend.Delete();

            //Setting chart title
            ppChart.ChartTitle.Font.Italic = false;
            ppChart.ChartTitle.Text = "Poll Results";
            ppChart.ChartTitle.Font.Size = 18;
            ppChart.ChartTitle.Font.Color = System.Drawing.ColorTranslator.ToOle(System.Drawing.Color.Black);
            ppChart.ChartTitle.Format.Line.Visible = Microsoft.Office.Core.MsoTriState.msoTrue;
            ppChart.ChartTitle.Format.Line.ForeColor.RGB = System.Drawing.ColorTranslator.ToOle(System.Drawing.Color.Black);

            //setting all to red bars
            var series = ppChart.SeriesCollection(1) as PowerPoint.Series;

            var point = series.Points(1) as PowerPoint.Point;
            point.Interior.Color = System.Drawing.ColorTranslator.ToOle(System.Drawing.Color.Red);

            point = series.Points(2) as PowerPoint.Point;
            point.Interior.Color = System.Drawing.ColorTranslator.ToOle(System.Drawing.Color.Red);

            point = series.Points(3) as PowerPoint.Point;
            point.Interior.Color = System.Drawing.ColorTranslator.ToOle(System.Drawing.Color.Red);

            point = series.Points(4) as PowerPoint.Point;
            point.Interior.Color = System.Drawing.ColorTranslator.ToOle(System.Drawing.Color.Red);

            //Accessing Chart value axis
            Microsoft.Office.Interop.PowerPoint.Axis valaxis = ppChart.Axes(Microsoft.Office.Interop.PowerPoint.XlAxisType.xlValue, Microsoft.Office.Interop.PowerPoint.XlAxisGroup.xlPrimary);

            //Setting values axis units
            valaxis.MajorUnit = 2000.0F;
            valaxis.MinorUnit = 1000.0F;
            valaxis.MinimumScale = 0.0F;
            valaxis.MaximumScale = 30.0F;

            //Accessing Chart Depth axis
            Microsoft.Office.Interop.PowerPoint.Axis Depthaxis = ppChart.Axes(Microsoft.Office.Interop.PowerPoint.XlAxisType.xlSeriesAxis, Microsoft.Office.Interop.PowerPoint.XlAxisGroup.xlPrimary);
            Depthaxis.Delete();

            //Setting chart rotation
            ppChart.Rotation = 20; //Y-Value
            ppChart.Elevation = 15; //X-Value
            ppChart.RightAngleAxes = false;

            //Thread.Sleep(5000);
            Debug.WriteLine("over 2");

            var ws = new WebSocket("ws://localhost:1234");
            var the_message = "";

            ws.OnMessage += (sender12, sent) =>
            {
                try
                {
                    the_message = sent.Data;

                    var the_message2 = JsonConvert.DeserializeObject<List<PollNode>>(the_message);

                    var ques = "";
                    var ans_a = "";
                    var ans_b = "";
                    var ans_c = "";
                    var ans_d = "";
                    var num_a = "";
                    var num_b = "";
                    var num_c = "";
                    var num_d = "";
                    var correct_ans = "";

                    foreach (var m in the_message2)
                    {
                        ques = m.Question;
                        ans_a = m.A;
                        ans_b = m.B;
                        ans_c = m.C;
                        ans_d = m.D;
                        num_a = m.Freq_A;
                        num_b = m.Freq_B;
                        num_c = m.Freq_C;
                        num_d = m.Freq_D;
                        correct_ans = m.Correct;
                    }
                    Debug.WriteLine("The message recieved from Node.js:");
                    Debug.WriteLine(the_message);
                                     
                    textBox = Sld.Shapes.AddTextbox(Microsoft.Office.Core.MsoTextOrientation.msoTextOrientationHorizontal, 50, 90, 500, 70);
                    textBox.TextFrame.TextRange.InsertAfter(ques + "\n A: " + ans_a + "\n B: " + ans_b + "\n C: " + ans_c + "\n D: " + ans_d);
                    textBox.TextFrame.TextRange.Font.Size = 20;

                    if (correct_ans == "A")
                    {
                        point = series.Points(1) as PowerPoint.Point;
                        point.Interior.Color = System.Drawing.ColorTranslator.ToOle(System.Drawing.Color.Green);
                    }
                    else if (correct_ans == "B")
                    {
                        point = series.Points(1) as PowerPoint.Point;
                        point.Interior.Color = System.Drawing.ColorTranslator.ToOle(System.Drawing.Color.Green);
                    }
                    else if (correct_ans == "C")
                    {
                        point = series.Points(3) as PowerPoint.Point;
                        point.Interior.Color = System.Drawing.ColorTranslator.ToOle(System.Drawing.Color.Green);
                    }
                    else if (correct_ans == "D")
                    {
                        point = series.Points(4) as PowerPoint.Point;
                        point.Interior.Color = System.Drawing.ColorTranslator.ToOle(System.Drawing.Color.Green);
                    }

                    ((Microsoft.Office.Interop.Excel.Range)(dataSheet.Cells.get_Range("B2"))).FormulaR1C1 = Convert.ToInt32(num_a);
                    ((Microsoft.Office.Interop.Excel.Range)(dataSheet.Cells.get_Range("B3"))).FormulaR1C1 = Convert.ToInt32(num_b);
                    ((Microsoft.Office.Interop.Excel.Range)(dataSheet.Cells.get_Range("B4"))).FormulaR1C1 = Convert.ToInt32(num_c);
                    ((Microsoft.Office.Interop.Excel.Range)(dataSheet.Cells.get_Range("B5"))).FormulaR1C1 = Convert.ToInt32(num_d);
                 }
                catch (InvalidCastException e)
                {
                    Debug.WriteLine("Source: ", e.Source);
                }

            };
            ws.Connect();

            ws.OnError += (sender12, sent) =>
            {
                Debug.WriteLine("error " + sent.Message);
            };

            ws.OnClose += (sender12, sent) =>
            {
                Debug.WriteLine("disconnect with host");
            };
        }

        private void GEN_Daily_Attendance_Chart(PowerPoint.Slide Sld)
        {
            //Select the slide and set its layout
            Sld.Select();
            Sld.Layout = Microsoft.Office.Interop.PowerPoint.PpSlideLayout.ppLayoutBlank;

            //Add a default chart in slide
            Sld.Shapes.AddChart(Microsoft.Office.Core.XlChartType.xl3DColumn, 200F, 200F, 400F, 300F);

            //Add a heading
            PowerPoint.Shape textBox = Sld.Shapes.AddTextbox(Microsoft.Office.Core.MsoTextOrientation.msoTextOrientationHorizontal, 0, 20, 1000, 70);
            textBox.TextFrame.TextRange.InsertAfter("Today's Live Attendance");
            textBox.TextFrame.TextRange.Font.Size = 30;
            textBox.TextFrame.VerticalAnchor = Microsoft.Office.Core.MsoVerticalAnchor.msoAnchorMiddle;
            textBox.TextFrame.HorizontalAnchor = Microsoft.Office.Core.MsoHorizontalAnchor.msoAnchorCenter;

            //Access the added chart
            Microsoft.Office.Interop.PowerPoint.Chart ppChart = Sld.Shapes[1].Chart;

            //Access the chart data
            Microsoft.Office.Interop.PowerPoint.ChartData chartData = ppChart.ChartData;

            //Create instance to Excel workbook to work with chart data
            Microsoft.Office.Interop.Excel.Workbook dataWorkbook = (Microsoft.Office.Interop.Excel.Workbook)chartData.Workbook;

            //Accessing the data worksheet for chart
            Microsoft.Office.Interop.Excel.Worksheet dataSheet = dataWorkbook.Worksheets[1];

            //Setting the range of chart
            Microsoft.Office.Interop.Excel.Range tRange = dataSheet.Cells.get_Range("A1", "B3");

            //Create a Table and applying the set range on chart data table
            Microsoft.Office.Interop.Excel.ListObject tbl1 = dataSheet.ListObjects["Table1"];
            tbl1.Resize(tRange);

            //Global variables for total present and absent
            var total_absent = 10;
            var total_present = 0;

            //Setting values for categories and respective series data
            ((Microsoft.Office.Interop.Excel.Range)(dataSheet.Cells.get_Range("A2"))).FormulaR1C1 = "Absent";
            ((Microsoft.Office.Interop.Excel.Range)(dataSheet.Cells.get_Range("A3"))).FormulaR1C1 = "Present";
            ((Microsoft.Office.Interop.Excel.Range)(dataSheet.Cells.get_Range("B2"))).FormulaR1C1 = total_absent;
            ((Microsoft.Office.Interop.Excel.Range)(dataSheet.Cells.get_Range("B3"))).FormulaR1C1 = total_present;


            //Delete the legend for neatness
            Microsoft.Office.Interop.PowerPoint.Legend legend = null;
            legend = ppChart.Legend;
            legend.Delete();

            //Setting chart title
            ppChart.ChartTitle.Font.Italic = false;
            ppChart.ChartTitle.Text = "Attendance Results";
            ppChart.ChartTitle.Font.Size = 18;
            ppChart.ChartTitle.Font.Color = System.Drawing.ColorTranslator.ToOle(System.Drawing.Color.Black);
            ppChart.ChartTitle.Format.Line.Visible = Microsoft.Office.Core.MsoTriState.msoTrue;
            ppChart.ChartTitle.Format.Line.ForeColor.RGB = System.Drawing.ColorTranslator.ToOle(System.Drawing.Color.Black);

            //Accessing Chart value axis
            Microsoft.Office.Interop.PowerPoint.Axis valaxis = ppChart.Axes(Microsoft.Office.Interop.PowerPoint.XlAxisType.xlValue, Microsoft.Office.Interop.PowerPoint.XlAxisGroup.xlPrimary);

            //Setting values axis units
            valaxis.MajorUnit = 2000.0F;
            valaxis.MinorUnit = 1000.0F;
            valaxis.MinimumScale = 0.0F;
            valaxis.MaximumScale = 10.0F;

            //Accessing Chart Depth axis
            Microsoft.Office.Interop.PowerPoint.Axis Depthaxis = ppChart.Axes(Microsoft.Office.Interop.PowerPoint.XlAxisType.xlSeriesAxis, Microsoft.Office.Interop.PowerPoint.XlAxisGroup.xlPrimary);
            Depthaxis.Delete();

            //Setting chart rotation
            ppChart.Rotation = 20; //Y-Value
            ppChart.Elevation = 15; //X-Value
            ppChart.RightAngleAxes = false;

            var ws = new WebSocket("ws://localhost:1234");
            var the_message = "";

            ws.OnMessage += (sender12, sent) =>
            {
                try
                {
                    the_message = sent.Data;
                    var the_message2 = JsonConvert.DeserializeObject<List<DailyAttendanceNode>>(the_message);

                    var stud_name = "";
                    var stud_status = "";

                    foreach (var m in the_message2)
                    {
                        stud_name = m.Name;
                        stud_status = m.Status;
                    }

                    Debug.WriteLine("The message recieved from Node.js:");
                    Debug.WriteLine(the_message);

                    if (stud_status == "A")
                    {
                        //do nothing
                    }
                    else if (stud_status == "P")
                    {
                        total_absent -= 1;
                        total_present += 1;
                    }

                    ((Microsoft.Office.Interop.Excel.Range)(dataSheet.Cells.get_Range("B2"))).FormulaR1C1 = Convert.ToInt32(total_absent);
                    ((Microsoft.Office.Interop.Excel.Range)(dataSheet.Cells.get_Range("B3"))).FormulaR1C1 = Convert.ToInt32(total_present);

                }
                catch (InvalidCastException e)
                {
                    Debug.WriteLine("Source: ", e.Source);
                }

            };
            ws.Connect();

            ws.OnError += (sender12, sent) =>
            {
                Debug.WriteLine("error " + sent.Message);
            };

            ws.OnClose += (sender12, sent) =>
            {
                Debug.WriteLine("disconnect with host");
            };
        }

        private void GEN_Student_Record_Chart(PowerPoint.Slide Sld)
        {
            Sld.Select();
            Sld.Layout = Microsoft.Office.Interop.PowerPoint.PpSlideLayout.ppLayoutBlank;

            //Add a default chart in slide
            Sld.Shapes.AddChart(Microsoft.Office.Core.XlChartType.xl3DColumn, 200F, 200F, 400F, 300F);

            //Add a heading
            PowerPoint.Shape textBox = Sld.Shapes.AddTextbox(Microsoft.Office.Core.MsoTextOrientation.msoTextOrientationHorizontal, 0, 20, 1000, 70);
            textBox.TextFrame.TextRange.InsertAfter("Student-wise Consolidated Attendance Record");
            textBox.TextFrame.TextRange.Font.Size = 30;
            textBox.TextFrame.VerticalAnchor = Microsoft.Office.Core.MsoVerticalAnchor.msoAnchorMiddle;
            textBox.TextFrame.HorizontalAnchor = Microsoft.Office.Core.MsoHorizontalAnchor.msoAnchorCenter;

            //Access the added chart
            Microsoft.Office.Interop.PowerPoint.Chart ppChart = Sld.Shapes[1].Chart;

            //Access the chart data
            Microsoft.Office.Interop.PowerPoint.ChartData chartData = ppChart.ChartData;

            //Create instance to Excel workbook to work with chart data
            Microsoft.Office.Interop.Excel.Workbook dataWorkbook = (Microsoft.Office.Interop.Excel.Workbook)chartData.Workbook;

            //Accessing the data worksheet for chart
            Microsoft.Office.Interop.Excel.Worksheet dataSheet = dataWorkbook.Worksheets[1];

            //Setting the range of chart
            Microsoft.Office.Interop.Excel.Range tRange = dataSheet.Cells.get_Range("A1", "C4");

            //Create a Table and applying the set range on chart data table
            Microsoft.Office.Interop.Excel.ListObject tbl1 = dataSheet.ListObjects["Table1"];
            tbl1.Resize(tRange);

            //Setting values for categories and respective series data
            ((Microsoft.Office.Interop.Excel.Range)(dataSheet.Cells.get_Range("A2"))).FormulaR1C1 = "";
            ((Microsoft.Office.Interop.Excel.Range)(dataSheet.Cells.get_Range("A3"))).FormulaR1C1 = "";
            ((Microsoft.Office.Interop.Excel.Range)(dataSheet.Cells.get_Range("A4"))).FormulaR1C1 = "";
            ((Microsoft.Office.Interop.Excel.Range)(dataSheet.Cells.get_Range("B2"))).FormulaR1C1 = 0;
            ((Microsoft.Office.Interop.Excel.Range)(dataSheet.Cells.get_Range("B3"))).FormulaR1C1 = 0;
            ((Microsoft.Office.Interop.Excel.Range)(dataSheet.Cells.get_Range("B4"))).FormulaR1C1 = 0;
            ((Microsoft.Office.Interop.Excel.Range)(dataSheet.Cells.get_Range("C2"))).FormulaR1C1 = 0;
            ((Microsoft.Office.Interop.Excel.Range)(dataSheet.Cells.get_Range("C3"))).FormulaR1C1 = 0;
            ((Microsoft.Office.Interop.Excel.Range)(dataSheet.Cells.get_Range("C4"))).FormulaR1C1 = 0;

            //Delete the legend for neatness
            Microsoft.Office.Interop.PowerPoint.Legend legend = null;
            legend = ppChart.Legend;
            legend.Delete();

            //Setting chart title
            ppChart.ChartTitle.Font.Italic = false;
            ppChart.ChartTitle.Text = "Attendance Results";
            ppChart.ChartTitle.Font.Size = 18;
            ppChart.ChartTitle.Font.Color = System.Drawing.ColorTranslator.ToOle(System.Drawing.Color.Black);
            ppChart.ChartTitle.Format.Line.Visible = Microsoft.Office.Core.MsoTriState.msoTrue;
            ppChart.ChartTitle.Format.Line.ForeColor.RGB = System.Drawing.ColorTranslator.ToOle(System.Drawing.Color.Black);

            //Accessing Chart value axis
            Microsoft.Office.Interop.PowerPoint.Axis valaxis = ppChart.Axes(Microsoft.Office.Interop.PowerPoint.XlAxisType.xlValue, Microsoft.Office.Interop.PowerPoint.XlAxisGroup.xlPrimary);

            //Setting values axis units
            valaxis.MajorUnit = 2000.0F;
            valaxis.MinorUnit = 1000.0F;
            valaxis.MinimumScale = 0.0F;
            valaxis.MaximumScale = 30.0F;

            //Accessing Chart Depth axis
            Microsoft.Office.Interop.PowerPoint.Axis Depthaxis = ppChart.Axes(Microsoft.Office.Interop.PowerPoint.XlAxisType.xlSeriesAxis, Microsoft.Office.Interop.PowerPoint.XlAxisGroup.xlPrimary);
            Depthaxis.Delete();

            //Setting chart rotation
            ppChart.Rotation = 20; //Y-Value
            ppChart.Elevation = 15; //X-Value
            ppChart.RightAngleAxes = false;

            var ws = new WebSocket("ws://localhost:1234");
            var the_message = "";

            ws.OnMessage += (sender12, sent) =>
            {
                try
                {
                    the_message = sent.Data;
                    var the_message2 = JsonConvert.DeserializeObject<List<StudentRecordNode>>(the_message);

                    var hiba_p = 0;
                    var jeehan_p = 0;
                    var shiza_p = 0;
                    var hiba_a = 0;
                    var jeehan_a = 0;
                    var shiza_a = 0;

                    foreach (var m in the_message2)
                    {
                        if (m.name == "Hiba")
                        {

                        }
                    }

                }
                catch (InvalidCastException e)
                {
                    Debug.WriteLine("Source: ", e.Source);
                }

            };
            ws.Connect();

            ws.OnError += (sender12, sent) =>
            {
                Debug.WriteLine("error " + sent.Message);
            };

            ws.OnClose += (sender12, sent) =>
            {
                Debug.WriteLine("disconnect with host");
            };
        }

        private void ThisAddIn_Shutdown(object sender, System.EventArgs e)
        {
        }

        #region VSTO generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InternalStartup()
        {
            this.Startup += new System.EventHandler(ThisAddIn_Startup);
            this.Shutdown += new System.EventHandler(ThisAddIn_Shutdown);
        }

        #endregion
    }
}
