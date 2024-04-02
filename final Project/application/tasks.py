from application .workers import celery
from celery.schedules import crontab

@celery.task
def sayHello():
    print('Hello world')

@celery.on_after_finalize.connect
def daily_reminder_job(sender, **kwargs):
    sender.add_periodic_task(60.0, sayHello.s(), name='at every 60 seconds')