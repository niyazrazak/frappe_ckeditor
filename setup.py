from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in frappe_ckeditor/__init__.py
from frappe_ckeditor import __version__ as version

setup(
	name="frappe_ckeditor",
	version=version,
	description="Rich Text Editor",
	author="Niyaz Razak",
	author_email="niyasibnurazak@gmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
