Feature: Create Document

  I can create a Document

  Background:
    Given I login as "Administrator"
    And I click the Create Document button

  Scenario Outline: Create <doctype>
    Given I select <doctype> from the Document Type menu
    Then I create a <doctype>
    And I go to the <doctype>

  Examples:
    |doctype  |
    |Note     |
    |File     |
    |Picture  |
    |Folder   |
    |Workspace|
