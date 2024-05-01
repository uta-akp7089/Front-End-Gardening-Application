########################################################################
####################### Makefile Template ##############################
########################################################################
# Student settings
NAME = AKSHAY_PALURI
SID = 1001897089
EMAIL = akp7089@mavs.uta.edu
SEMESTER = SPRING2024
HE_PARTNERS = AmeenMahouch_GustavoChavez_HyunHoKim_PatrickArzoumanian 
# Youtube link -  https://www.youtube.com/watch?v=5q6eogciN3o

####### DO NOT EDIT BELOW THIS LINE!!! #########
author: 
	@echo $(NAME)
	@echo $(SID)
	@echo $(EMAIL)
	@echo $(SEMESTER)
	@echo $(HE_PARTNERS)
submit:
	zip -r "submission_$(SEMESTER)_$(SID)_$(NAME).zip" .


cleanup:
	@rm -f .DS_Store
	@rm -f */.DS_Store

