default:
	@echo "please select a command from makefile"

icon:
	@mkdir ./src/icons/$(name)
	@touch ./src/icons/$(name)/$(name).jsx
	@touch ./src/icons/$(name)/$(name).css
	@touch ./src/icons/$(name)/$(name).svg
	@git add ./src/icons/$(name)/$(name).jsx ./src/icons/$(name)/$(name).css ./src/icons/$(name)/$(name).svg
