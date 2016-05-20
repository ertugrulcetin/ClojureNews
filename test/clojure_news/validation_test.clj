(ns clojure-news.validation-test
  (:require [clojure.test :refer :all]
            [cljc.validation :as validation]))

(deftest test-username-nil-or-empty
  (is (= (validation/username? "") false))
  (is (= (validation/username? nil) false))
  (is (= (validation/username? "   ") false)))

(deftest test-username-char-long-between-2-15
  (is (= (validation/username? "neat") true))
  (is (= (validation/username? "neat159") true))
  (is (= (validation/username? "_neat159_") true))
  (is (= (validation/username? "NeAt_159") true)))

(deftest test-username-char-long-not-between-2-15
  (is (= (validation/username? "a") false))
  (is (= (validation/username? "b") false))
  (is (= (validation/username? "abcdefghacbsbsbb") false)))

(deftest test-username-contains-only-nums-and-letters
  (is (= (validation/username? "ertu-ctn") false))
  (is (= (validation/username? "$_-*1") false)))

(deftest test-password-nil-or-empty
  (is (= (validation/password? "") false))
  (is (= (validation/password? nil) false))
  (is (= (validation/password? "   ") false)))

(deftest test-password-char-long-between-8-20
  (is (= (validation/password? "neat1234") true))
  (is (= (validation/password? "neat159123") true))
  (is (= (validation/password? "_neat159_") true))
  (is (= (validation/password? "NeAt_159") true))
  (is (= (validation/password? "aaaaaaaaaaaaaaaaaaaa") true)))

(deftest test-password-char-long-not-between-8-20
  (is (= (validation/password? "a") false))
  (is (= (validation/password? "b") false))
  (is (= (validation/password? "aaaaaaaaaaaaaaaaaaaaa") false)))
