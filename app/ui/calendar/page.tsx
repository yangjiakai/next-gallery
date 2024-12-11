"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { addDays, differenceInDays, format } from "date-fns";
import { useState } from "react";
import { DateRange } from "react-day-picker";

export default function CalendarPage() {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 3),
  });

  const resetDate = () => {
    setDate(undefined);
  };

  return (
    <div className="space-y-6  ">
      <div>
        <h1 className="text-3xl font-bold">Calendar</h1>
        <p className="text-muted-foreground mt-2">
          A calendar component for date range selection.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {/* 日期选择卡片 */}
        <Card>
          <CardHeader>
            <CardTitle>选择入住日期</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Calendar
                mode="range"
                selected={date}
                onSelect={setDate}
                numberOfMonths={1}
                className="rounded-md border"
              />
              <Button variant="outline" onClick={resetDate}>
                重置日期
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* 选择结果卡片 */}
        <Card>
          <CardHeader>
            <CardTitle>已选择日期</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {date?.from ? (
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">入住日期</span>
                    <span className="font-medium">
                      {format(date.from, "yyyy年MM月dd日")}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">退房日期</span>
                    <span className="font-medium">
                      {date.to ? format(date.to, "yyyy年MM月dd日") : "未选择"}
                    </span>
                  </div>
                  {date.to && (
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">共计天数</span>
                      <span className="font-medium">
                        {differenceInDays(date.to, date.from) + 1} 天
                      </span>
                    </div>
                  )}
                </div>
              ) : (
                <p className="text-muted-foreground text-center">
                  请选择入住日期
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
