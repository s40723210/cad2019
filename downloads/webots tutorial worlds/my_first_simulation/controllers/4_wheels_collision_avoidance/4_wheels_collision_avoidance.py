from controller import Robot

TIME_STEP = 64
robot = Robot()
# initialize motors
wheels = []
wheelsNames = ['wheel1', 'wheel2', 'wheel3', 'wheel4']
for name in wheelsNames:
    wheels.append(robot.getMotor(name))
speed = -1.5  # [rad/s]
wheels[0].setPosition(float('inf'))
wheels[0].setVelocity(speed)
wheels[1].setPosition(float('inf'))
wheels[1].setVelocity(speed)
wheels[2].setPosition(float('inf'))
wheels[2].setVelocity(speed)
wheels[3].setPosition(float('inf'))
wheels[3].setVelocity(speed)
wheels[4].setPosition(float('inf'))
wheels[4].setVelocity(speed)
wheels[5].setPosition(float('inf'))
wheels[5].setVelocity(speed)