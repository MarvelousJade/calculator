
REPEAT
	Get user input number 
	Display number on number div
UNTIL get a operator input
IF haven't get first number 
	Get first number from number div
ELSE 
	Get second number from number div
END IF

IF user input operator
	IF already get two numbers 
		Calculate result
		Display result on number div
		Remove first number, second number and operator
	ElSE IF is not calculatable
		IF didn't get a equal operators
			Get operator by ID
			Display first number and operator on expression div
			Go to step 1
		END IF
END IF
