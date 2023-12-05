global with sharing class SchedulerNationalHolidays implements Schedulable {

    global static String sch = '00 00 01 1 1 ? *';    
    
    global static String scheduleMe(){                
        SchedulerNationalHolidays s = new SchedulerNationalHolidays(); 
        return System.schedule('National Holidays iniciado em: ' + String.valueOf(Datetime.now()), sch, s);
    }

    global void execute(SchedulableContext ctx){
        NationalHolidaysController.setNationalHolidays();
    }
}